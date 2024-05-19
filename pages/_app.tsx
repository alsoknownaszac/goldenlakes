import "../app/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
// import "tailwindcss/tailwind.css";
import { useMemo, useState } from "react";
import { AppContext } from "../components/hooks/AppContext.hook";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [display, setDisplay] = useState({
    modal: false,
    navMenu: false,
  });

  const displayValue = useMemo(
    () => ({ display, setDisplay }),
    [display, setDisplay]
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AppContext.Provider value={displayValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
