import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Iranoan official website." />
      <title>Iranoan</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Noto+Sans+JP:wght@400;500&family=Raleway:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />;
  </>
  return
}

export default MyApp;
