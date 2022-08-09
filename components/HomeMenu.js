import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import headphonesThumb from "../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumb from "../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumb from "../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

function HomeMenu(props) {
  const clickHandler = () => {
    if (
      props &&
      Object.keys(props).length === 0 &&
      Object.getPrototypeOf(props) === Object.prototype
    ) {
      return;
    } else {
      props.setMobMenuOpen(false);
    }
  };

  return (
    <section className='flex flex-col space-y-[68px] md:flex-row md:justify-between md:space-y-0 md:space-x-[10px] lg:space-x-[30px]'>
      <div className='relative flex flex-col items-center rounded-lg bg-gray pb-[22px] md:w-full lg:pb-[30px]'>
        <Image
          src={headphonesThumb}
          alt=''
          className='absolute h-[140px] -translate-y-[38%] object-contain lg:h-[200px]'
        />
        <h6 className='mobmenu-h mt-[88px] lg:mt-[116px] lg:text-[18px] lg:leading-[24px] lg:tracking-[1.3px]'>
          HEADPHONES
        </h6>
        <Link href='/headphones'>
          <div
            className='mt-[17px] flex cursor-pointer items-center lg:mt-[15px]'
            onClick={clickHandler}
          >
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
      <div className='relative flex flex-col items-center rounded-lg bg-gray pb-[22px] md:w-full'>
        <Image
          src={speakersThumb}
          alt=''
          className='absolute h-[140px] -translate-y-[40%] object-contain lg:h-[200px] lg:-translate-y-[35%]'
        />
        <h6 className='mobmenu-h mt-[88px] lg:mt-[116px] lg:text-[18px] lg:leading-[24px] lg:tracking-[1.3px]'>
          SPEAKERS
        </h6>
        <Link href='/speakers'>
          <div
            className='mt-[17px] flex cursor-pointer items-center lg:mt-[15px]'
            onClick={clickHandler}
          >
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
      <div className='relative flex flex-col items-center rounded-lg bg-gray pb-[22px] md:w-full'>
        <Image
          src={earphonesThumb}
          alt=''
          className='absolute h-[140px] -translate-y-[30%] object-contain lg:h-[180px]'
        />
        <h6 className='mobmenu-h mt-[88px] lg:mt-[116px] lg:text-[18px] lg:leading-[24px] lg:tracking-[1.3px]'>
          EARPHONES
        </h6>
        <Link href='/earphones'>
          <div
            className='mt-[17px] flex cursor-pointer items-center lg:mt-[15px]'
            onClick={clickHandler}
          >
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
  );
}

export default HomeMenu;
