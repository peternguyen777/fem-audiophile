import React from "react";
import mobYx1 from "../../public/assets/home/mobile/image-earphones-yx1.jpg";
import tabYx1 from "../../public/assets/home/tablet/image-earphones-yx1.jpg";
import desktopYx1 from "../../public/assets/home/desktop/image-earphones-yx1.jpg";
import Image from "next/future/image";
import Button3 from "../UI/Button3";

function Yx1() {
  return (
    <div className='mt-6 md:mt-8 md:grid md:grid-flow-row md:grid-cols-2 md:gap-x-[11px] lg:mt-12 lg:gap-x-[30px]'>
      <Image
        src={mobYx1}
        alt=''
        className='h-[200px] w-full rounded-lg object-cover md:hidden'
      />
      <Image
        src={tabYx1}
        alt=''
        className='hidden h-[320px] rounded-lg object-cover md:inline-block lg:hidden'
      />
      <Image
        src={desktopYx1}
        alt=''
        className='hidden h-full rounded-lg object-cover lg:inline-block'
      />
      <div className='relative mt-6 h-[200px] rounded-lg bg-gray md:mt-0 md:h-[320px]'>
        <div className='absolute top-1/2 left-6 -translate-y-1/2 md:left-10 lg:left-[95px]'>
          <h4 className='mb-8 text-black'>YX1 EARPHONES</h4>
          <Button3>SEE PRODUCT</Button3>
        </div>
      </div>
    </div>
  );
}

export default Yx1;
