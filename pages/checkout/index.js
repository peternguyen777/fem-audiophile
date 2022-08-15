import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Button1Submit from "../../components/UI/Button1Submit";
import Success from "../../components/Checkout/success";
import axios from "axios";

//react hook form + yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import checkoutValidation from "../../validation/checkoutValidation";

//redux
import {
  selectItems,
  selectTotalQty,
  selectTotalPrice,
  setGrandPrice,
} from "../../store/cartSlice";
import { selectSuccessIsVisible, toggleSuccess } from "../../store/uiSlice";
import { submitCheckout, selectData } from "../../store/checkoutSlice";
import { useSelector, useDispatch } from "react-redux";

//stripe
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(`${process.env.stripe_public_key}`);

function Checkout() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,

    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(checkoutValidation), mode: "all" });

  const paymentMethod = watch("payment");

  const items = useSelector(selectItems);
  const totalQty = useSelector(selectTotalQty);
  const totalPrice = useSelector(selectTotalPrice);
  const success = useSelector(selectSuccessIsVisible);
  const formData = useSelector(selectData);

  const shippingPrice = 50;
  const gstPrice = (totalPrice + shippingPrice) * 0.1;
  const grandTotalPrice = totalPrice + shippingPrice;
  dispatch(setGrandPrice(grandTotalPrice));

  useEffect(() => {
    if (router.query.success && items.length > 0) {
      dispatch(toggleSuccess());
      setValue("name", formData.name);
      setValue("email", formData.email);
      setValue("phone", formData.phone);
      setValue("address", formData.address);
      setValue("suburb", formData.suburb);
      setValue("state", formData.state);
      setValue("pcode", formData.pcode);
      setValue("payment", formData.payment);
    }

    if (router.query.cancel) {
      setValue("name", formData.name);
      setValue("email", formData.email);
      setValue("phone", formData.phone);
      setValue("address", formData.address);
      setValue("suburb", formData.suburb);
      setValue("state", formData.state);
      setValue("pcode", formData.pcode);
      setValue("payment", formData.payment);
    }
  }, [router.query.success, router.query.cancel, setValue, formData]);

  useEffect(() => {
    setValue("name", formData.name);
    setValue("email", formData.email);
    setValue("phone", formData.phone);
    setValue("address", formData.address);
    setValue("suburb", formData.suburb);
    setValue("state", formData.state);
    setValue("pcode", formData.pcode);
    setValue("payment", formData.payment);
  }, [setValue, formData]);

  const onSubmit = (data) => {
    dispatch(submitCheckout(data));

    createCheckoutSession(data);

    if (paymentMethod === "Cash on Delivery") {
      router.push("/checkout?success=true", undefined, { shallow: true });
    }
  };

  const createCheckoutSession = async (data) => {
    if (paymentMethod === "Stripe") {
      const stripe = await stripePromise;

      const checkoutSession = await axios.post("api/create-checkout-session", {
        items,
        data,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    }

    if (paymentMethod === "Cash on Delivery") {
      await axios.post("api/create-delivery-session", {
        items,
        data,
        grandTotalPrice,
        shippingPrice,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/assets/favicon-32x32.png' />
      </Head>
      {success && <Success />}
      <main className='mx-6 max-w-[1190px] md:mx-10 lg:mx-auto lg:px-10'>
        <p
          className='mt-4 cursor-pointer opacity-50 hover:text-orange hover:opacity-100 md:mt-12 lg:mt-[80px]'
          onClick={() => router.back()}
        >
          Go Back
        </p>
        <form
          className='mt-6 mb-[98px] md:mb-[116px] lg:mt-[38px] lg:flex lg:space-x-[30px]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='rounded-lg bg-white p-6 md:px-7 md:py-[30px] lg:grow lg:p-12 lg:pt-14'>
            <h4 className='md:hidden'>CHECKOUT</h4>
            <h3 className='hidden md:block'>CHECKOUT</h3>

            {/* BILLING DETAILS */}
            <p className='sub-title mt-8 md:mt-10'>BILLING DETAILS</p>
            <div className='md:mt-4 md:flex md:space-x-4'>
              <div className='mt-4 md:mt-0 md:w-full'>
                <label
                  htmlFor='name'
                  className={`flex justify-between ${
                    errors.name && `text-[#CD2C2C]`
                  }`}
                >
                  <p className='form-label'>Name</p>
                  {errors.name && (
                    <p className='form-label'>{errors.name.message}</p>
                  )}
                </label>
                <input
                  {...register("name", { required: true })}
                  className={`${
                    errors.name && `ring-2 ring-[#CD2C2C] focus:ring-[#CD2C2C]`
                  }`}
                  placeholder='Peter Nguyen'
                />
              </div>
              <div className='mt-6 md:mt-0 md:w-full'>
                <label
                  htmlFor='email'
                  className={`flex justify-between ${
                    errors.email && `text-[#CD2C2C]`
                  }`}
                >
                  <p className='form-label'>Email Address</p>
                  {errors.email && (
                    <p className='form-label'>{errors.email.message}</p>
                  )}
                </label>
                <input
                  {...register("email", { required: true })}
                  className={`${
                    errors.email && `ring-2 ring-[#CD2C2C] focus:ring-[#CD2C2C]`
                  }`}
                  placeholder='peter.quang.nguyen@gmail.com'
                />
              </div>
            </div>
            <div className='mt-6 md:w-[calc(50%-8px)]'>
              <label
                htmlFor='phone'
                className={`flex justify-between ${
                  errors.phone && `text-[#CD2C2C]`
                }`}
              >
                <p className='form-label'>Phone Number</p>
                {errors.phone && (
                  <p className='form-label'>{errors.phone.message}</p>
                )}
              </label>
              <input
                {...register("phone", { required: true })}
                className={`${
                  errors.phone && `ring-2 ring-[#CD2C2C] focus:ring-[#CD2C2C]`
                }`}
                placeholder='0403269626'
              />
            </div>

            {/* SHIPPING INFO */}
            <p className='sub-title mt-8 md:mt-[52px]'>SHIPPING INFO</p>
            <div className='mt-4'>
              <label
                htmlFor='address'
                className={`flex justify-between ${
                  errors.address && `text-[#CD2C2C]`
                }`}
              >
                <p className='form-label'>Your Address</p>
                {errors.address && (
                  <p className='form-label'>{errors.address.message}</p>
                )}
              </label>
              <input
                {...register("address", { required: true })}
                className={`${
                  errors.address && `ring-2 ring-[#CD2C2C] focus:ring-[#CD2C2C]`
                }`}
                placeholder='1 Martin Place'
              />
            </div>
            <div className='md:mt-6 md:flex md:space-x-4'>
              <div className='mt-6 md:mt-0 md:w-full'>
                <label
                  htmlFor='suburb'
                  className={`flex justify-between ${
                    errors.suburb && `text-[#CD2C2C]`
                  }`}
                >
                  <p className='form-label'>Suburb</p>
                  {errors.suburb && (
                    <p className='form-label'>{errors.suburb.message}</p>
                  )}
                </label>
                <input
                  {...register("suburb", { required: true })}
                  className={`${
                    errors.suburb &&
                    `ring-2 ring-[#CD2C2C] focus:ring-[#CD2C2C]`
                  }`}
                  placeholder='Sydney'
                />
              </div>
              <div className='mt-6 md:mt-0 md:w-full'>
                <label
                  htmlFor='state'
                  className={`flex justify-between ${
                    errors.state && `text-[#CD2C2C]`
                  }`}
                >
                  <p className='form-label'>State</p>
                  {errors.state && (
                    <p className='form-label'>{errors.state.message}</p>
                  )}
                </label>
                <input
                  {...register("state", { required: true })}
                  className={`${
                    errors.state && `ring-2 ring-[#CD2C2C] focus:ring-[#CD2C2C]`
                  }`}
                  placeholder='New South Wales'
                />
              </div>
            </div>
            <div className='mt-6 md:w-[calc(50%-8px)]'>
              <label
                htmlFor='pcode'
                className={`flex justify-between ${
                  errors.pcode && `text-[#CD2C2C]`
                }`}
              >
                <p className='form-label'>Post Code</p>
                {errors.pcode && (
                  <p className='form-label'>{errors.pcode.message}</p>
                )}
              </label>
              <input
                {...register("pcode", { required: true })}
                className={`${
                  errors.pcode && `ring-2 ring-[#CD2C2C] focus:ring-[#CD2C2C]`
                }`}
                placeholder='2000'
              />
            </div>

            {/* PAYMENT DETAILS */}
            <p className='sub-title mt-8 md:mt-[60px]'>PAYMENT DETAILS</p>

            <div className='md:mt-4 md:flex md:justify-between'>
              <label
                htmlFor='payment'
                className={`mt-4 flex justify-between md:mt-0 md:flex-col md:justify-start ${
                  errors.payment && `text-[#CD2C2C]`
                }`}
              >
                <p className='form-label'>Payment Method</p>
                {errors.payment && (
                  <p className='form-label md:mt-4'>Select a payment method</p>
                )}
              </label>
              <div className='md:w-[calc(50%-8px)]'>
                <div
                  className={`mt-4 flex h-14 w-full cursor-pointer items-center rounded-lg ring-1 ring-[#CFCFCF] hover:ring-orange md:mt-0 ${
                    paymentMethod === "Stripe" && `ring-orange`
                  }`}
                  onClick={() => {
                    setValue("payment", "Stripe");
                  }}
                >
                  <input
                    {...register("payment", { required: true })}
                    type='radio'
                    value='Stripe'
                    className={`my-0 mx-[25px] h-[10px] w-[10px] cursor-pointer appearance-none  rounded-full p-0 ring-1 ring-[#CFCFCF] ring-offset-[5px] ${
                      paymentMethod === "Stripe" && `bg-orange `
                    }`}
                  />
                  <label htmlFor='payment' className='mt-0'>
                    <p className='form-label'>Credit/Debit Card (via Stripe)</p>
                  </label>
                </div>

                <div
                  className={`mt-4 flex h-14 w-full cursor-pointer items-center rounded-lg ring-1 ring-[#CFCFCF] hover:ring-orange ${
                    paymentMethod === "Cash on Delivery" && `ring-orange`
                  }`}
                  onClick={() => {
                    setValue("payment", "Cash on Delivery");
                  }}
                >
                  <input
                    {...register("payment", { required: true })}
                    type='radio'
                    value='Cash on Delivery'
                    className={`my-0 mx-[25px] h-[10px] w-[10px] cursor-pointer appearance-none  rounded-full p-0 ring-1 ring-[#CFCFCF] ring-offset-[5px] ${
                      paymentMethod === "Cash on Delivery" && `bg-orange `
                    }`}
                  />
                  <label htmlFor='payment' className='mt-0'>
                    <p className='form-label'>Cash on Delivery</p>
                  </label>
                </div>
              </div>
            </div>
            {paymentMethod === "Cash on Delivery" && (
              <div className='mt-[30px] flex min-h-[200px] items-center md:min-h-0 '>
                <div className='mr-4 md:mr-8'>
                  <svg
                    width='48'
                    height='48'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z'
                      fill='#D87D4A'
                    />
                  </svg>
                </div>

                <p className='opacity-50 '>
                  The &apos;Cash on Delivery&apos; option enables you to pay in
                  cash when our delivery courier arrives at your residence. Just
                  make sure your address is correct so that your order will not
                  be cancelled.
                </p>
              </div>
            )}
          </div>

          <div className='mx-auto mt-8 w-full flex-none rounded-lg bg-white py-8 px-6 md:p-8 lg:mt-0 lg:h-fit lg:w-[350px]'>
            <div className='flex items-center justify-between'>
              <h6>SUMMARY</h6>
            </div>
            <div className='mt-8 space-y-6'>
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='flex items-center justify-between'
                  >
                    <div className='flex w-full items-center'>
                      <div className='relative mr-4 h-16 w-16 flex-none rounded-lg'>
                        <Image
                          src={item.image}
                          alt=''
                          layout='fill'
                          objectFit='contain'
                          className='rounded-lg'
                        />
                      </div>
                      <div className='w-full'>
                        <div className='flex justify-between'>
                          <p className='font-bold'>{item.nameShort}</p>
                          <p className='text-[14px] font-bold opacity-50'>
                            x{item.quantity}
                          </p>
                        </div>
                        <p className='text-[14px] font-bold opacity-50'>
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='mt-8 flex items-center justify-between'>
              <p className='font-medium opacity-50'>TOTAL</p>
              <h6>
                $
                {totalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </h6>
            </div>
            <div className='mt-2 flex items-center justify-between'>
              <p className='font-medium opacity-50'>SHIPPING</p>
              <h6>
                $
                {totalQty === 0
                  ? `0.00`
                  : shippingPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
              </h6>
            </div>
            <div className='mt-2 flex items-center justify-between'>
              <p className='font-medium opacity-50'>GST (10% INCLUDED)</p>
              <h6>
                $
                {totalQty === 0
                  ? `0.00`
                  : gstPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
              </h6>
            </div>
            <div className='mt-6 mb-8 flex items-center justify-between'>
              <p className='font-medium opacity-50'>GRAND TOTAL</p>
              <h6 className='text-orange'>
                $
                {totalQty === 0
                  ? `0.00`
                  : grandTotalPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
              </h6>
            </div>
            {paymentMethod === "Stripe" ? (
              <button
                type='submit'
                role='link'
                disabled={totalQty === 0 ? true : false}
                className='flex h-12 w-full flex-shrink-0 cursor-pointer items-center justify-center bg-orange transition-colors duration-200 hover:bg-lightorange disabled:bg-[#9ca3af]'
              >
                <p className='select-none font-manrope text-[13px] leading-[18px] tracking-[1px] text-white'>
                  {totalQty === 0 ? `CART EMPTY` : `CONTINUE & PAY`}
                </p>
              </button>
            ) : (
              <Button1Submit
                full
                submit
                disabled={totalQty === 0 ? true : false}
              >
                CONTINUE &#38; PAY
              </Button1Submit>
            )}
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
