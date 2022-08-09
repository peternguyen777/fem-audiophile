import React from "react";
import mobZx7 from "../../public/assets/home/mobile/image-speaker-zx7.jpg";
import tabZx7 from "../../public/assets/home/tablet/image-speaker-zx7.jpg";
import desktopZx7 from "../../public/assets/home/desktop/image-speaker-zx7.jpg";
import Image from "next/future/image";
import Button3 from "../UI/Button3";

function Zx7() {
  return (
    <div className='relative mt-6 rounded-lg md:mt-8 lg:mt-12'>
      <Image
        src={mobZx7}
        alt=''
        className='h-[320px] w-full rounded-lg object-cover md:hidden'
      />
      <Image
        src={tabZx7}
        alt=''
        className='hidden h-[320px] w-full rounded-lg object-cover md:inline-block lg:hidden'
      />
      <Image
        src={desktopZx7}
        alt=''
        className='hidden h-[320px] w-full rounded-lg object-cover lg:inline-block'
      />
      <div className='absolute left-6 top-1/2 -translate-y-1/2 md:left-[62px] lg:left-[95px]'>
        <h4 className='mb-8 text-black'>ZX7 SPEAKER</h4>
        <Button3>SEE PRODUCT</Button3>
      </div>
    </div>
  );
}

export default Zx7;
