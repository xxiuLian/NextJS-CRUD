import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "./Layout";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
