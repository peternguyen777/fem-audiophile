import React from "react";
import Button2 from "../../components/UI/Button2";
import mobZx9 from "../../public/assets/home/mobile/image-speaker-zx9.png";
import tabZx9 from "../../public/assets/home/tablet/image-speaker-zx9.png";
import desktopZx9 from "../../public/assets/home/desktop/image-speaker-zx9.png";
import Image from "next/future/image";

function Zx9() {
  return (
    <div className='relative mt-[120px] overflow-hidden rounded-lg bg-orange px-6 pb-14 pt-14 md:mt-[96px] md:px-[170px] md:pb-16 md:pt-[52px] lg:mb-0 lg:mt-[168px] lg:flex lg:h-[560px] lg:px-[95px] lg:py-0'>
      <div className='z-10'>
        <Image
          src={mobZx9}
          alt=''
          className='mx-auto h-[207px] object-contain md:hidden'
        />
        <Image
          src={tabZx9}
          alt=''
          className='mx-auto hidden h-[237px] object-contain md:inline-block lg:hidden'
        />
        <Image
          src={desktopZx9}
          alt=''
          className='hidden h-[493px] object-contain lg:inline-block lg:translate-y-[80px]'
        />
      </div>
      <div className='mt-8 flex flex-col items-center text-center md:mt-16 lg:mt-[133px] lg:ml-[80px] lg:items-start lg:text-left'>
        <h1 className='text-[36px] leading-[40px] tracking-[1.3px] text-white md:text-[56px] md:leading-[58px] md:tracking-[2px]'>
          ZX9
          <br />
          SPEAKER
        </h1>
        <p className='mt-6 mb-6 text-white opacity-75 md:mb-10 lg:w-[350px]'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <Button2>SEE PRODUCT</Button2>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='absolute left-1/2 -top-[200px] mx-auto w-[944px] -translate-x-1/2 md:-top-[288px] lg:-left-[150px] lg:-top-[36px] lg:translate-x-0'
        viewBox='0 0 944 944'
      >
        <g stroke='#FFF' fill='none' fillRule='evenodd' opacity='.202'>
          <circle cx='472' cy='472' r='235.5' />
          <circle cx='472' cy='472' r='270.5' />
          <circle cx='472' cy='472' r='471.5' />
        </g>
      </svg>
    </div>
  );
}

export default Zx9;
