import React from "react";
import Image from "next/future/image";
import mobBestGear from "../public/assets/shared/mobile/image-best-gear.jpg";
import tabBestGear from "../public/assets/shared/tablet/image-best-gear.jpg";
import desktopBestGear from "../public/assets/shared/desktop/image-best-gear.jpg";

function Action() {
  return (
    <div className='relative my-[120px] md:my-[96px] lg:flex lg:flex-row-reverse lg:items-center'>
      <Image src={mobBestGear} alt='' className='w-full rounded-lg md:hidden' />
      <Image
        src={tabBestGear}
        alt=''
        className='hidden w-full rounded-lg md:inline-block lg:hidden'
      />
      <Image
        src={desktopBestGear}
        alt=''
        className='hidden rounded-lg lg:inline-block'
      />
      <div className='text-center md:px-[57px] lg:mr-[125px] lg:w-[445px] lg:px-0 lg:text-left'>
        <h2 className='hidden md:mt-[64px] md:block lg:mt-0'>
          BRINGING YOU THE <span className='text-orange'>BEST </span>
          AUDIO GEAR
        </h2>
        <h4 className='mt-10 md:hidden'>
          BRINGING YOU THE <span className='text-orange'>BEST </span>
          AUDIO GEAR
        </h4>
        <p className='mt-8 opacity-50'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default Action;
