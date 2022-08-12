import React from "react";
import Link from "next/link";

function Button1({ disabled, children, submit, full, href, onClick }) {
  return (
    <Link href={href || ""}>
      <button
        type={`${submit ? `submit` : `button`}`}
        disabled={disabled ? true : false}
        className={`${
          full ? `w-full justify-center` : `w-fit px-[30px]`
        } flex h-12 flex-shrink-0 cursor-pointer items-center bg-orange transition-colors duration-200 hover:bg-lightorange disabled:bg-[#9ca3af]`}
        onClick={onClick || null}
      >
        <p className='select-none font-manrope text-[13px] leading-[18px] tracking-[1px] text-white'>
          {disabled ? `CART EMPTY` : children}
        </p>
      </button>
    </Link>
  );
}

export default Button1;
