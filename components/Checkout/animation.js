import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function Animation() {
  const container = useRef(null);

  useEffect(() => {
    lottie
      .loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: require("../../public/assets/animation/tick.json"),
      })
      .setSpeed(0.7);
  }, []);

  return (
    <div
      className='container h-[90px] w-[90px] -translate-x-[13px] -translate-y-[13px]'
      ref={container}
    />
  );
}

export default Animation;
