import React from "react";

function Button1Submit({ children, submit, full, onClick }) {
  return (
    <button
      type={`${submit ? `submit` : `button`}`}
      className={`${
        full ? `w-full justify-center` : `w-fit px-[30px]`
      } flex h-12 flex-shrink-0 cursor-pointer items-center bg-orange  transition-colors duration-200 hover:bg-lightorange `}
      onClick={onClick || null}
    >
      <p className='select-none font-manrope text-[13px] leading-[18px] tracking-[1px] text-white'>
        {children}
      </p>
    </button>
  );
}

export default Button1Submit;
