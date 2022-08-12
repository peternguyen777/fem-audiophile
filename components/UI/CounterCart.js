import React from "react";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

function CounterCart({ item }) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    const productToAdd = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      category: item.category,
    };

    dispatch(addToCart(productToAdd));
  };

  const removeItemHandler = () => {
    const productToRemove = {
      id: item.id,
      price: item.price,
    };

    dispatch(removeFromCart(productToRemove));
  };

  return (
    <div className='flex h-12 w-[120px] flex-none select-none items-center justify-center bg-gray'>
      <div className='flex space-x-5'>
        <p
          className='flex h-[18px] w-4 cursor-pointer justify-center text-[13px] font-bold leading-[18px] tracking-[1px] opacity-25 hover:text-orange hover:opacity-100'
          onClick={removeItemHandler}
        >
          -
        </p>
        <p className='flex h-[18px] w-4 justify-center text-[13px] font-bold leading-[18px] tracking-[1px]'>
          {item.quantity}
        </p>
        <p
          className='flex h-[18px] w-4 cursor-pointer justify-center text-[13px] font-bold leading-[18px] tracking-[1px] opacity-25 hover:text-orange hover:opacity-100'
          onClick={addItemHandler}
        >
          +
        </p>
      </div>
    </div>
  );
}

export default CounterCart;
