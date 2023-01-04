// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import { Layout } from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
