import React from "react";
import Link from "next/link";

function Button2({ children, submit, full, href }) {
  return (
    <Link href={href || ""}>
      <button
        type={`${submit ? `submit` : `button`}`}
        className={`${
          full ? `w-full` : `w-fit`
        } group z-10 flex h-12 flex-shrink-0 cursor-pointer items-center bg-black px-[30px] transition-colors duration-200 hover:bg-[#4C4C4C]`}
      >
        <p className='select-none font-manrope text-[13px] leading-[18px] tracking-[1px] text-white'>
          {children}
        </p>
      </button>
    </Link>
  );
}

export default Button2;
