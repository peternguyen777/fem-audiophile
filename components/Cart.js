import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import CounterCart from "./UI/CounterCart";
import Button1 from "./UI/Button1";
import { useSelector } from "react-redux";
import { selectItems } from "../store/cartSlice";

export default function Cart({ cartMenuOpen, setCartMenuOpen }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  //array containing all items
  const items = useSelector(selectItems);

  //add total price
  var totalPrice = 0;
  items.map((item) => {
    totalPrice += item.price;
  });

  //condense array to unique items

  const modalContent = (
    <AnimatePresence>
      {cartMenuOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.1,
          }}
          className='fixed top-[114px] left-6 right-6 z-30 flex rounded-lg md:top-[122px] md:left-10 md:right-10 lg:mx-auto lg:max-w-[1110px]'
        >
          <div
            className='hidden h-auto grow rounded-l-lg md:inline-block'
            onClick={() => setCartMenuOpen(false)}
          ></div>
          <div className='mx-auto w-full flex-none rounded-lg bg-white py-8 px-[28px] md:w-[377px]'>
            <div className='flex items-center justify-between'>
              <h6>CART ({items.length})</h6>
              <p className='cursor-pointer opacity-50 hover:text-orange hover:underline hover:opacity-100'>
                Remove All
              </p>
            </div>
            <div className='mt-8 space-y-6'>
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
                        <p className='font-bold'>{item.name}</p>
                        <p className='text-[14px] font-bold opacity-50'>
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <CounterCart />
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
              href='/checkout'
              onClick={() => setCartMenuOpen(false)}
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
      {cartMenuOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          className='fixed top-0 z-20 h-full w-full bg-black opacity-50'
          onClick={() => setCartMenuOpen(false)}
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
