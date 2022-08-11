import React from "react";

function CounterCart() {
  return (
    <div className='flex h-12 w-[120px] select-none items-center justify-center bg-gray'>
      <div className='flex space-x-5'>
        <p className='flex h-[18px] w-4 cursor-pointer justify-center text-[13px] font-bold leading-[18px] tracking-[1px] opacity-25 hover:text-orange hover:opacity-100'>
          -
        </p>
        <p className='flex h-[18px] w-4 justify-center text-[13px] font-bold leading-[18px] tracking-[1px]'>
          1
        </p>
        <p className='flex h-[18px] w-4 cursor-pointer justify-center text-[13px] font-bold leading-[18px] tracking-[1px] opacity-25 hover:text-orange hover:opacity-100'>
          +
        </p>
      </div>
    </div>
  );
}

export default CounterCart;
