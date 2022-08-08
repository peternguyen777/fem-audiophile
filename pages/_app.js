import "../styles/globals.css";
import Header from "../components/UI/Header";
import { useState, useEffect } from "react";
import MobileMenu from "../components/MobileMenu";

function MyApp({ Component, pageProps }) {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

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
      <Header mobMenuOpen={mobMenuOpen} setMobMenuOpen={setMobMenuOpen} />
      <MobileMenu mobMenuOpen={mobMenuOpen} setMobMenuOpen={setMobMenuOpen} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
