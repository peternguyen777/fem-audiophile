import "../styles/globals.css";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Cart from "../components/Cart";
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <MobileMenu />
      <Cart />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
