import React, { useEffect } from "react";
import Button1 from "./Button1";
import { capitalizeFirstLetter } from "../utils/capitalize";

function CardProduct({ item }) {
  //remove '.' from beginning of string
  const mobImagePath = item.image.mobile.substring(1);
  const desktopImagePath = item.image.desktop.substring(1);

  //find spot to insert breakpoint into title

  let str = item.name;

  if (item.category === "speakers") {
    var itemType = item.category.slice(0, -1);
  } else {
    var itemType = item.category;
  }

  let substring = str.indexOf(capitalizeFirstLetter(itemType));

  const itemTitle = str.slice(0, substring - 1);
  const itemCategory = str.slice(substring);

  return (
    <div className='lg:flex lg:items-center lg:even:flex-row-reverse'>
      <div className='rounded-lg bg-gray'>
        <img
          src={mobImagePath}
          alt=''
          className='mx-auto h-[327px] rounded-lg object-contain md:hidden'
        />
        <img
          src={mobImagePath}
          alt=''
          className='mx-auto hidden rounded-lg object-contain md:block md:h-[352px] lg:hidden'
        />
        <img
          src={desktopImagePath}
          alt=''
          className='mx-auto hidden rounded-lg object-contain lg:block lg:w-[540px]'
        />
      </div>
      <div className='hidden w-[125px] lg:inline-block'></div>
      <div className='mt-8 flex flex-col items-center text-center md:mt-[52px] md:px-[58px] lg:mt-0 lg:w-[445px] lg:items-start lg:px-0 lg:text-left'>
        {item.new && <p className='form-title mb-4'>NEW PRODUCT</p>}
        <h4 className='uppercase md:hidden'>
          {itemTitle}
          <br />
          {itemCategory}
        </h4>
        <h2 className='hidden uppercase md:block'>
          {itemTitle}
          <br />
          {itemCategory}
        </h2>
        <p className='mt-4 mb-4 opacity-50 md:mt-8 md:mb-6 '>
          {item.description}
        </p>
        <Button1 href={`/${item.category}/${item.slug}`}>SEE PRODUCT</Button1>
      </div>
    </div>
  );
}

export default CardProduct;
