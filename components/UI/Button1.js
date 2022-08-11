import React from "react";
import Link from "next/link";

function Button1({ children, submit, full, href, onClick }) {
  return (
    <Link href={href || ""}>
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
    </Link>
  );
}

export default Button1;
