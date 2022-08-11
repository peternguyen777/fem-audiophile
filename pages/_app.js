import "../styles/globals.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import MobileMenu from "../components/MobileMenu";
import Cart from "../components/Cart";

function MyApp({ Component, pageProps }) {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Header
        mobMenuOpen={mobMenuOpen}
        setMobMenuOpen={setMobMenuOpen}
        cartMenuOpen={cartMenuOpen}
        setCartMenuOpen={setCartMenuOpen}
      />
      <MobileMenu mobMenuOpen={mobMenuOpen} setMobMenuOpen={setMobMenuOpen} />
      <Cart cartMenuOpen={cartMenuOpen} setCartMenuOpen={setCartMenuOpen} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
