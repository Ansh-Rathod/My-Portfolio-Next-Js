import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ModelProvider } from "@/contexts/showModelContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModelProvider>
      <Component {...pageProps} />
    </ModelProvider>
  );
}

export default MyApp;
