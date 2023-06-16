import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
