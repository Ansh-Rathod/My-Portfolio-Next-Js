import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          rel="preload"
          href="/fonts/SpaceMono-Regular.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />

        <link
          rel="preload"
          href="/fonts/Poppins-Bold.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
      </Head>
      <Script
        src="/track.js"
        async
        data-website-id="197b8706-1f1c-4b81-a7a7-1af79df25d6c"
      ></Script>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
