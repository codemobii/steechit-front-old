import App from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import { store, persistor } from "../services/store";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </StyletronProvider>
    );
  }
}
