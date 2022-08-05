import "../styles/globals.css";
import Header from "../components/UI/Header";
import { useState } from "react";
import MobileMenu from "../components/UI/MobileMenu";

function MyApp({ Component, pageProps }) {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  return (
    <>
      <Header mobMenuOpen={mobMenuOpen} setMobMenuOpen={setMobMenuOpen} />
      <MobileMenu mobMenuOpen={mobMenuOpen} setMobMenuOpen={setMobMenuOpen} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
