import "../styles/globals.css";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Cart from "../components/Cart";

//redux
import store from "../store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <MobileMenu />
        <Cart />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
