import type { AppProps } from "next/app";
import { GlobalReset } from "../styles/global";
import ScrollContextProvider from "../context/scroll-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollContextProvider>
      <GlobalReset />
      <Component {...pageProps} />
    </ScrollContextProvider>
  );
}

export default MyApp;
