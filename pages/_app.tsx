import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";

import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
