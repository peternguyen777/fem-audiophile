import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";
import Button1 from "../UI/Button1";
import Animation from "./animation";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  removeAllFromCart,
  selectGrandPrice,
  selectItems,
  selectTotalQty,
} from "../../store/cartSlice";
import { selectSuccessIsVisible, toggleSuccess } from "../../store/uiSlice";
import { eraseCheckout } from "../../store/checkoutSlice";

export default function Success() {
  const [isBrowser, setIsBrowser] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1440) {
        setShowMore(false);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  const success = useSelector(selectSuccessIsVisible);
  const items = useSelector(selectItems);
  const totalQty = useSelector(selectTotalQty);
  const grandPrice = useSelector(selectGrandPrice);

  const restItems = items.slice(1);

  const closeSuccessHandler = () => {
    dispatch(toggleSuccess());
    dispatch(removeAllFromCart());
    dispatch(eraseCheckout());
    router.push("/");
  };

  const expandHandler = () => {
    if (window.innerWidth < 1440) {
      return;
    }
    setShowMore(true);
  };

  if (totalQty - items[0]?.quantity > 0) {
    var otherItems = totalQty - items[0]?.quantity;
  }

  const modalContent = (
    <AnimatePresence>
      {success ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className='fixed top-[114px] left-6 right-6 z-30 mx-auto flex max-w-[540px] rounded-lg bg-white p-8 md:top-[122px] md:p-12'
        >
          <div className='w-full'>
            <Animation />
            <h5 className='-mt-[2px] leading-[28px] tracking-[0.86px] md:hidden'>
              THANK YOU
              <br />
              FOR YOUR ORDER
            </h5>
            <h3 className='hidden md:mt-[6px] md:block '>
              THANK YOU
              <br />
              FOR YOUR ORDER
            </h3>
            <p className='mt-4 opacity-50 md:mt-6'>
              You will receive an email confirmation shortly.
            </p>
            <div className='my-6 md:mt-8 md:mb-12 md:flex md:w-full'>
              <div className='flex flex-col rounded-t-lg bg-gray p-6 md:w-full md:rounded-l-lg md:rounded-r-none'>
                <div className='flex w-full items-center'>
                  <div className='relative mr-4 h-[50px] w-[50px] flex-none rounded-lg'>
                    <Image
                      src={items[0]?.image}
                      alt=''
                      layout='fill'
                      objectFit='contain'
                      className='rounded-lg'
                    />
                  </div>

                  <div className='w-full'>
                    <div className='flex items-center justify-between'>
                      <p className='font-bold'>{items[0]?.nameShort}</p>
                      <p className='font-bold opacity-50'>
                        x{items[0]?.quantity}
                      </p>
                    </div>
                    <p className='text-[14px] font-bold opacity-50'>
                      ${items[0]?.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                {otherItems &&
                  (showMore ? (
                    <div className=''>
                      {restItems.map((item) => (
                        <div
                          key={item.id}
                          className='mt-4 flex w-full items-center'
                        >
                          <div className='relative mr-4 h-[50px] w-[50px] flex-none rounded-lg'>
                            <Image
                              src={item.image}
                              alt=''
                              layout='fill'
                              objectFit='contain'
                              className='rounded-lg'
                            />
                          </div>
                          <div className='w-full'>
                            <div className='flex items-center justify-between'>
                              <p className='font-bold'>{item.nameShort}</p>
                              <p className='font-bold opacity-50'>
                                x{item.quantity}
                              </p>
                            </div>
                            <p className='text-[14px] font-bold opacity-50'>
                              ${item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                      <hr className='my-3 opacity-[8%]' />
                      <p
                        onClick={() => setShowMore(false)}
                        className='cursor-pointer text-center text-[12px] font-bold leading-[16px] tracking-[-0.2px] opacity-50'
                      >
                        View Less
                      </p>
                    </div>
                  ) : (
                    <div onClick={expandHandler}>
                      <hr className='my-3 opacity-[8%]' />
                      <p className='cursor-pointer text-center text-[12px] font-bold leading-[16px] tracking-[-0.2px] opacity-50'>
                        and {totalQty - items[0]?.quantity} other item(s)
                      </p>
                    </div>
                  ))}
              </div>
              <div className='relative rounded-b-lg bg-black px-6 pb-[19px] pt-[15px] md:w-[198px] md:flex-none md:rounded-l-none md:rounded-r-lg md:p-0 md:pl-6'>
                <div
                  className={`md:absolute ${
                    otherItems
                      ? `md:bottom-[41px]`
                      : `md:top-1/2 md:-translate-y-1/2`
                  } `}
                >
                  <p className='text-white opacity-50'>GRAND TOTAL</p>
                  <h6 className='mt-2 text-white'>
                    ${grandPrice.toLocaleString()}
                  </h6>
                </div>
              </div>
            </div>
            <Button1 href='/' onClick={closeSuccessHandler} full>
              BACK TO HOME
            </Button1>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  const underlayContent = (
    <AnimatePresence>
      {success ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className='fixed top-0 z-20 h-full w-full bg-black opacity-50'
          onClick={closeSuccessHandler}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );

  if (isBrowser) {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          underlayContent,
          document.getElementById("cartMenu-root")
        )}
        {ReactDOM.createPortal(
          modalContent,
          document.getElementById("cartMenu-root")
        )}
      </React.Fragment>
    );
  } else {
    return null;
  }
}
