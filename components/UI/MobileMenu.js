import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/future/image";
import ReactDOM from "react-dom";
import headphonesThumb from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumb from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumb from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function MobileMenu({ mobMenuOpen, setMobMenuOpen }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <>
      <div
        className={`absolute top-[90px] z-30 h-fit w-full select-none rounded-b-lg bg-lightgray px-6 pb-[35px] pt-[84px] md:hidden ${
          mobMenuOpen ? "translate-y-0" : "-translate-y-full"
        } duration-300 ease-in-out`}
      >
        <section className='flex flex-col space-y-[68px]'>
          <div className='relative flex flex-col items-center rounded-lg bg-gray pb-[22px]'>
            <Image
              src={headphonesThumb}
              alt=''
              className='absolute h-[140px] -translate-y-[38%] object-contain'
            />
            <h6 className='mobmenu-h mt-[88px]'>HEADPHONES</h6>
            <Link href='/'>
              <div className='mt-[17px] flex cursor-pointer items-center'>
                <p className='mobmenu-p mr-[13px]'>SHOP</p>
                <svg width='8' height='12' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1.322 1l5 5-5 5'
                    stroke='#D87D4A'
                    strokeWidth='2'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className='relative flex flex-col items-center rounded-lg bg-gray pb-[22px]'>
            <Image
              src={speakersThumb}
              alt=''
              className='absolute h-[140px] -translate-y-[40%] object-contain'
            />
            <h6 className='mobmenu-h mt-[88px]'>SPEAKERS</h6>
            <Link href='/'>
              <div className='mt-[17px] flex cursor-pointer items-center'>
                <p className='mobmenu-p mr-[13px]'>SHOP</p>
                <svg width='8' height='12' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1.322 1l5 5-5 5'
                    stroke='#D87D4A'
                    strokeWidth='2'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className='relative flex flex-col items-center rounded-lg bg-gray pb-[22px]'>
            <Image
              src={earphonesThumb}
              alt=''
              className='absolute h-[140px] -translate-y-[30%] object-contain'
            />
            <h6 className='mobmenu-h mt-[88px]'>EARPHONES</h6>
            <Link href='/'>
              <div className='mt-[17px] flex cursor-pointer items-center'>
                <p className='mobmenu-p mr-[13px]'>SHOP</p>
                <svg width='8' height='12' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1.322 1l5 5-5 5'
                    stroke='#D87D4A'
                    strokeWidth='2'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );

  const underlayContent = (
    <AnimatePresence>
      {mobMenuOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          className='fixed top-0 z-20 h-full w-full bg-black opacity-50 md:hidden'
          onClick={() => setMobMenuOpen(false)}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );

  if (isBrowser) {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          underlayContent,
          document.getElementById("mobMenu-root")
        )}
        {ReactDOM.createPortal(
          modalContent,
          document.getElementById("mobMenu-root")
        )}
      </React.Fragment>
    );
  } else {
    return null;
  }
}
