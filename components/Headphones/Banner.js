import React from "react";

function Banner({ category }) {
  return (
    <div className='relative h-[102px] w-full justify-center bg-charcoal md:h-[246px]'>
      <h4 className='absolute bottom-8 left-0 right-0 text-center text-white md:hidden'>
        {category}
      </h4>
      <h2 className='absolute  left-0 right-0 hidden text-center text-white md:bottom-[97px] md:block'>
        {category}
      </h2>
    </div>
  );
}

export default Banner;
