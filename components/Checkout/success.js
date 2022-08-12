import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeAllFromCart,
  selectGrandPrice,
  selectItems,
  selectTotalQty,
} from "../../store/cartSlice";
import { selectSuccessIsVisible, toggleSuccess } from "../../store/uiSlice";
import { useRouter } from "next/router";
import Button1 from "../UI/Button1";

export default function Success() {
  const [isBrowser, setIsBrowser] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const success = useSelector(selectSuccessIsVisible);
  const items = useSelector(selectItems);
  const totalQty = useSelector(selectTotalQty);
  const grandPrice = useSelector(selectGrandPrice);

  const restItems = items.slice(1);

  const closeSuccessHandler = () => {
    dispatch(toggleSuccess());

    dispatch(removeAllFromCart());

    router.push("/");
  };

  if (totalQty - items[0].quantity > 0) {
    var otherItems = totalQty - items[0].quantity;
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
          className='fixed top-[224px] left-6 right-6 z-30 mx-auto flex max-w-[540px] rounded-lg bg-white p-8 md:p-12 lg:top-[156px]'
        >
          <div className='w-full'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-16 w-16'>
              <g fill='none' fillRule='evenodd'>
                <circle fill='#D87D4A' cx='32' cy='32' r='32' />
                <path
                  stroke='#FFF'
                  stroke-width='4'
                  d='m20.754 33.333 6.751 6.751 15.804-15.803'
                />
              </g>
            </svg>
            <h5 className='mt-4 leading-[28px] tracking-[0.86px] md:hidden'>
              THANK YOU
              <br />
              FOR YOUR ORDER
            </h5>
            <h3 className='hidden md:mt-8 md:block '>
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
                  <img
                    src={items[0]?.image}
                    alt=''
                    className='mr-4 h-[50px] w-[50px] rounded-lg'
                  />
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
                    <div>
                      {restItems.map((item) => (
                        <>
                          <div className='mt-4 flex w-full items-center'>
                            <img
                              src={item.image}
                              alt=''
                              className='mr-4 h-[50px] w-[50px] rounded-lg'
                            />
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
                          <hr className='my-3 opacity-[8%]' />
                          <p
                            onClick={() => setShowMore(false)}
                            className='cursor-pointer text-center text-[12px] font-bold leading-[16px] tracking-[-0.2px] opacity-50'
                          >
                            View Less
                          </p>
                        </>
                      ))}
                    </div>
                  ) : (
                    <div onClick={() => setShowMore(true)}>
                      <hr className='my-3 opacity-[8%]' />
                      <p className='cursor-pointer text-center text-[12px] font-bold leading-[16px] tracking-[-0.2px] opacity-50'>
                        and {totalQty - items[0]?.quantity} other item(s)
                      </p>
                    </div>
                  ))}
              </div>
              <div className='relative rounded-b-lg bg-black px-6 pb-[19px] pt-[15px] md:w-[198px] md:flex-none md:rounded-l-none md:rounded-r-lg md:p-0 md:pl-6'>
                <div className='md:absolute md:bottom-[41px]'>
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
