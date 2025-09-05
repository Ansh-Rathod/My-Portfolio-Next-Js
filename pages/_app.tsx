import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

// Configure SpaceMono as the only font
const spaceMono = localFont({
  src: "../public/fonts/SpaceMono-Regular.ttf",
  variable: "--font-space-mono",
  display: "swap",
});

export const textBody = "text-[18px]    text-slate-500 ";

export const smallContainer =
  "px-6  max-w-[600px]    mx-auto border-l border-r tracking-tight border-dashed border-slate-400";
export const textH1 = "text-3xl";
export const textH2 = "text-xl";
export const textDes = "text-md leading-relaxed text-slate-400";
export const message =
  "bg-[#0B82FE] text-white p-4 rounded-bl-4xl rounded-t-4xl mt-2";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${spaceMono.variable}`}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="c0b35b73-97bb-431d-b0da-dcb3c4582bca"
      ></Script>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
