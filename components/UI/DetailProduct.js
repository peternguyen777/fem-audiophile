import React, { useState } from "react";
import Image from "next/image";
import Button1Submit from "../UI/Button1Submit";
import Button1 from "../UI/Button1";
import { useRouter } from "next/router";
import CounterAddCart from "./CounterAddCart";
import { addToCart } from "../../store/cartSlice";
import { toggleCartClose, toggleCartOpen } from "../../store/uiSlice";
import { useDispatch } from "react-redux";

function DetailProduct({ projectData }) {
  const [counter, setCounter] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id: projectData.id,
      name: projectData.name,
      nameShort: projectData.nameShort,
      image: projectData.image.mobile.substring(1),
      category: projectData.category,
      price: projectData.price,
    };
    for (let i = 0; i < counter; i++) {
      dispatch(addToCart(product));
    }
    setTimeout(() => {
      dispatch(toggleCartOpen());
    }, 500);

    clearTimeout();

    setTimeout(() => {
      dispatch(toggleCartClose());
    }, 1500);
  };

  return (
    <>
      <p
        className='mt-4 cursor-pointer font-medium opacity-50 hover:text-orange hover:opacity-100 md:mt-8 lg:mt-[80px]'
        onClick={() => router.back()}
      >
        Go Back
      </p>
      {/* Main */}
      <div className='mt-6 md:flex md:items-center lg:mt-14'>
        <div className='relative mx-auto h-[327px] rounded-lg bg-gray md:hidden'>
          <Image
            layout='fill'
            objectFit='contain'
            src={projectData.image.mobile.substring(1)}
            alt=''
            className='rounded-lg object-contain md:hidden'
          />
        </div>
        <div className='relative mx-auto hidden h-[480px] w-full bg-gray md:mr-[70px]  md:block lg:hidden'>
          <Image
            layout='fill'
            objectFit='contain'
            src={projectData.image.tablet.substring(1)}
            alt=''
            className='rounded-lg'
          />
        </div>
        <div className='relative mx-auto hidden h-[560px] w-full bg-gray lg:mr-[125px] lg:block'>
          <Image
            layout='fill'
            objectFit='contain'
            src={projectData.image.desktop.substring(1)}
            alt=''
            className='rounded-lg'
          />
        </div>
        <div>
          {projectData.new && (
            <p className='form-title mt-8 mb-6 md:mt-0 md:mb-4'>NEW PRODUCT</p>
          )}
          <h4
            className={`${
              projectData.new ? `mt-6` : `mt-10`
            } whitespace-pre-wrap uppercase md:mt-0 md:leading-8 md:tracking-[1px] lg:hidden`}
          >
            {projectData.name}
          </h4>
          <h2 className='hidden whitespace-pre-wrap uppercase lg:inline-block'>
            {projectData.name}
          </h2>
          <p className='mt-6 opacity-50 md:mt-8'>{projectData.description}</p>
          <h6 className='mt-6 md:mt-8'>
            ${projectData.price.toLocaleString()}
          </h6>
          {/* ADD TO CART */}
          <div className='mt-8 flex space-x-4 lg:mt-12'>
            <CounterAddCart counter={counter} setCounter={setCounter} />

            <Button1Submit onClick={addItemToCart}>ADD TO CART</Button1Submit>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className='lg:mt-[160px] lg:flex'>
        <div className='mt-[88px] md:mt-[120px] lg:mt-0 lg:mr-[125px] lg:w-[635px]'>
          <h3 className='hidden md:inline-block'>FEATURES</h3>
          <h5 className='md:hidden'>FEATURES</h5>
          <p className='mt-6 whitespace-pre-wrap opacity-50 md:mt-8'>
            {projectData.features}
          </p>
        </div>

        {/* In the box */}
        <div className='mt-[88px] md:mt-[120px] md:flex md:w-[550px] md:justify-between lg:mt-0 lg:w-auto lg:flex-col lg:justify-start'>
          <h3 className='hidden md:inline-block'>IN THE BOX</h3>
          <h5 className='md:hidden'>IN THE BOX</h5>
          <ul className='mt-6 space-y-2 md:mt-0 lg:mt-8'>
            {projectData.includes.map((boxItem, i) => (
              <li key={i} className='flex'>
                <p className='mr-6 font-bold text-orange'>
                  {boxItem.quantity}x
                </p>
                <p className='opacity-50'>{boxItem.item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* gallery mobile*/}
      <div className='mt-[88px] grid h-[756px] grid-rows-4 gap-y-5 md:hidden'>
        <div className='relative'>
          <Image
            layout='fill'
            objectFit='cover'
            src={projectData.gallery.first.mobile.substring(1)}
            alt=''
            className='rounded-lg'
          />
        </div>
        <div className='relative'>
          <Image
            layout='fill'
            objectFit='cover'
            src={projectData.gallery.second.mobile.substring(1)}
            alt=''
            className='rounded-lg'
          />
        </div>
        <div className='relative row-span-2 '>
          <Image
            layout='fill'
            objectFit='cover'
            src={projectData.gallery.third.mobile.substring(1)}
            alt=''
            className='rounded-lg'
          />
        </div>
      </div>

      {/* Gallery Tablet */}
      <div className='mt-[120px] hidden grid-cols-5 gap-5 md:grid md:h-[368px] lg:hidden'>
        <div className='col-span-2 grid grid-rows-2 gap-5'>
          <div className='relative'>
            <Image
              src={projectData.gallery.first.tablet.substring(1)}
              alt=''
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
          <div className='relative'>
            <Image
              src={projectData.gallery.second.tablet.substring(1)}
              alt=''
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='relative col-span-3'>
          <Image
            src={projectData.gallery.third.tablet.substring(1)}
            alt=''
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
      </div>

      {/* Gallery Desktop */}
      <div className='mt-[160px] hidden grid-cols-5 gap-8 lg:grid lg:h-[592px]'>
        <div className='col-span-2 grid grid-rows-2 gap-8'>
          <div className='relative'>
            <Image
              src={projectData.gallery.first.desktop.substring(1)}
              alt=''
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
          <div className='relative'>
            <Image
              src={projectData.gallery.second.desktop.substring(1)}
              alt=''
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
        </div>

        <div className='relative col-span-3'>
          <Image
            src={projectData.gallery.third.desktop.substring(1)}
            alt=''
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
      </div>

      {/* others */}
      <div className='mt-[120px] text-center lg:mt-[160px]'>
        <h5 className='md:hidden'>YOU MAY ALSO LIKE</h5>
        <h3 className='hidden md:inline-block'>YOU MAY ALSO LIKE</h3>
        <ul className='mt-10 space-y-14 md:mt-14 md:flex md:space-y-0 md:space-x-[10px] lg:mt-16 lg:space-x-[30px]'>
          {projectData.others.map((item, i) => (
            <li key={i} className='md:w-full'>
              {/* <img
                src={item.image.mobile.substring(1)}
                alt=''
                className='mx-auto rounded-lg object-contain md:hidden'
              />
              <img
                src={item.image.tablet.substring(1)}
                alt=''
                className='mx-auto hidden rounded-lg object-contain md:block lg:hidden'
              />
              <img
                src={item.image.desktop.substring(1)}
                alt=''
                className='mx-auto hidden rounded-lg object-contain lg:block'
              /> */}
              <div className='relative mx-auto h-[120px] rounded-lg bg-gray md:hidden'>
                <Image
                  src={item.image.mobile.substring(1)}
                  alt=''
                  layout='fill'
                  objectFit='contain'
                  className='rounded-lg'
                />
              </div>
              <div className='relative mx-auto hidden h-[318px] rounded-lg bg-gray md:block lg:hidden'>
                <Image
                  src={item.image.tablet.substring(1)}
                  alt=''
                  layout='fill'
                  objectFit='contain'
                  className='rounded-lg'
                />
              </div>
              <div className='relative mx-auto hidden h-[318px] rounded-lg bg-gray lg:block'>
                <Image
                  src={item.image.desktop.substring(1)}
                  alt=''
                  layout='fill'
                  objectFit='contain'
                  className='rounded-lg'
                />
              </div>
              <div className='mt-8 flex flex-col items-center md:mt-10'>
                <h5 className='mb-8'>{item.name}</h5>

                <Button1 href={`/${projectData.category}/${item.slug}`}>
                  SEE PRODUCT
                </Button1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DetailProduct;
