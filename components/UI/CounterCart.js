import React, { useState } from "react";

function CounterCart() {
  const [counter, setCounter] = useState(1);
  return (
    <div className='flex h-12 w-[120px] select-none items-center justify-center bg-gray'>
      <div className='flex space-x-5'>
        <p
          className='flex h-[18px] w-4 cursor-pointer justify-center text-[13px] font-bold leading-[18px] tracking-[1px] opacity-25 hover:text-orange hover:opacity-100'
          onClick={() => {
            if (counter === 1) {
              return;
            } else {
              setCounter((prevCount) => prevCount - 1);
            }
          }}
        >
          -
        </p>
        <p className='flex h-[18px] w-4 justify-center text-[13px] font-bold leading-[18px] tracking-[1px]'>
          {counter}
        </p>
        <p
          className='flex h-[18px] w-4 cursor-pointer justify-center text-[13px] font-bold leading-[18px] tracking-[1px] opacity-25 hover:text-orange hover:opacity-100'
          onClick={() => setCounter((prevCount) => prevCount + 1)}
        >
          +
        </p>
      </div>
    </div>
  );
}

export default CounterCart;
