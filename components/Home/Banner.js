import React from "react";
import Image from "next/future/image";
import mobImgHeader from "../../public/assets/home/mobile/image-header.jpg";
import tabImgHeader from "../../public/assets/home/tablet/image-header.jpg";
import desktopImgHeader from "../../public/assets/home/desktop/image-hero.jpg";
import Button1 from "../UI/Button1";

function Banner() {
  return (
    <div className='relative flex h-fit w-full justify-center bg-[#191919] lg:h-[729px]'>
      <Image src={mobImgHeader} alt='' className='-mt-[90px] md:hidden' />
      <Image
        src={tabImgHeader}
        alt=''
        className='-mt-[90px] hidden md:inline-block lg:hidden'
      />
      <Image
        src={desktopImgHeader}
        alt=''
        className='-mt-[90px] hidden object-contain lg:inline-block'
      />
      <div className='absolute bottom-[112px] w-full max-w-[1190px] px-6 md:bottom-[167px] md:px-[195px] lg:bottom-0 lg:top-[135px] lg:px-10 '>
        <div className='flex flex-col items-center text-center lg:w-[379px] lg:items-start lg:text-left'>
          <p className='form-title text-white opacity-50'>NEW PRODUCT</p>
          <h1 className='mt-4 text-[36px] leading-[40px] tracking-[1.3px] text-white md:mt-6 md:text-[56px] md:leading-[58px] md:tracking-[2px]'>
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>
          <p className='mt-6 mb-[28px] text-white opacity-75 md:mb-10 lg:w-[350px]'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button1>SEE PRODUCT</Button1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
