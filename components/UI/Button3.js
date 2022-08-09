import React from "react";
import Link from "next/link";

function Button3({ children, submit, full, href }) {
  return (
    <Link href={href || ""}>
      <button
        type={`${submit ? `submit` : `button`}`}
        className={`${
          full ? `w-full` : `w-fit`
        } group z-10 flex h-12 flex-shrink-0 cursor-pointer items-center border bg-transparent px-[30px] transition-colors duration-200 hover:bg-black`}
      >
        <p className='select-none font-manrope text-[13px] leading-[18px] tracking-[1px] text-black group-hover:text-white'>
          {children}
        </p>
      </button>
    </Link>
  );
}

export default Button3;
