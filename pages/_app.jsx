import "../styles/globals.css";
import Layout from "./Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { ...pageProps } }) {
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
