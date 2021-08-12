import "@styles/global.scss";
import "antd/dist/antd.css";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "next-seo.config";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "tailwindcss/tailwind.css";

const Empty: React.FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const Layout = (Component as any).Layout || Empty;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Iranoan official website." />
        <title>Iranoan</title>
        <link rel="icon" type="image/png" href="/iranoan.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Noto+Sans+JP:wght@400;500&family=Raleway:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <>
        <DefaultSeo {...seoConfig} />
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </>
    </>
  );
  return;
}

export default MyApp;
