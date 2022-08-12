import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import CounterCart from "./UI/CounterCart";
import Button1 from "./UI/Button1";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  selectTotalPrice,
  removeAllFromCart,
  selectTotalQty,
} from "../store/cartSlice";
import { selectCartIsVisible, toggleCartClose } from "../store/uiSlice";

export default function Cart() {
  const [isBrowser, setIsBrowser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQty);
  const cartOpen = useSelector(selectCartIsVisible);

  const removeAllHandler = () => {
    dispatch(removeAllFromCart());

    setTimeout(() => {
      dispatch(toggleCartClose());
    }, 500);
  };

  const toggleCartHandler = () => {
    dispatch(toggleCartClose());
  };

  const modalContent = (
    <AnimatePresence>
      {cartOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className='fixed top-[114px] left-6 right-6 z-30 flex rounded-lg md:top-[122px] md:left-10 md:right-10 lg:mx-auto lg:max-w-[1110px]'
        >
          <div
            className='hidden h-auto grow rounded-l-lg md:inline-block'
            onClick={toggleCartHandler}
          ></div>
          <div className='mx-auto w-full flex-none rounded-lg bg-white py-8 px-[28px] md:w-[377px]'>
            <div className='flex items-center justify-between'>
              <h6>CART ({totalQuantity})</h6>
              <p
                className='cursor-pointer opacity-50 hover:text-orange hover:underline hover:opacity-100'
                onClick={removeAllHandler}
              >
                Remove All
              </p>
            </div>
            <div className='mobCartScroll mt-8 space-y-6 overflow-y-scroll '>
              {items.map((item, i) => {
                return (
                  <div key={i} className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <img
                        src={item.image}
                        alt=''
                        className='mr-4 h-16 w-16 rounded-lg'
                      />
                      <div>
                        <p className='font-bold'>{item.nameShort}</p>
                        <p className='text-[14px] font-bold opacity-50'>
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <CounterCart item={item} />
                  </div>
                );
              })}
            </div>
            <div className='mt-8 mb-6 flex items-center justify-between'>
              <p className='font-medium opacity-50'>TOTAL</p>
              <h6>${totalPrice}</h6>
            </div>
            <Button1
              full
              disabled={totalQuantity === 0 ? true : false}
              href='/checkout'
              onClick={toggleCartHandler}
            >
              CHECKOUT
            </Button1>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  const underlayContent = (
    <AnimatePresence>
      {cartOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className='fixed top-0 z-20 h-full w-full bg-black opacity-50'
          onClick={toggleCartHandler}
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
