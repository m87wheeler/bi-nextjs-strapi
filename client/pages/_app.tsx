import type { AppProps } from "next/app";
import { GlobalReset } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalReset />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
