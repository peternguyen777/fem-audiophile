import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import HomeMenu from "./HomeMenu";

export default function MobileMenu({ mobMenuOpen, setMobMenuOpen }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <div
      className={`mobMenuScroll fixed top-[90px] z-30 h-[calc(100vh-90px)] max-h-[750px] w-full select-none overflow-y-scroll rounded-b-lg bg-lightgray px-6 pb-[35px] pt-[84px] duration-300 ease-in-out md:max-h-[340px] md:px-10 md:pt-[108px] md:pb-[67px] ${
        mobMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <HomeMenu />
    </div>
  );

  const underlayContent = (
    <AnimatePresence>
      {mobMenuOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          className='fixed top-0 z-20 h-full w-full bg-black opacity-50'
          onClick={() => setMobMenuOpen(false)}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );

  if (isBrowser) {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          underlayContent,
          document.getElementById("mobMenu-root")
        )}
        {ReactDOM.createPortal(
          modalContent,
          document.getElementById("mobMenu-root")
        )}
      </React.Fragment>
    );
  } else {
    return null;
  }
}
