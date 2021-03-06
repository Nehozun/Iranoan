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
        <meta
          name="description"
          content="イラノアンの公式ホームページです。トレーディングカード販売、アプリ開発をはじめ、あなたのライフスタイルに刺激と遊びを与えるサービスを開発しています。"
        />
        <title>Iranoan</title>
        <link rel="icon" type="image/png" href="/iranoan.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Noto+Sans+JP:wght@400;500&family=Raleway:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>
      <>
        <DefaultSeo {...seoConfig} />
        <div style={{ display: "none" }}>
          イラノアンの公式ホームページです。トレーディングカード販売、アプリ開発をはじめ、あなたのライフスタイルに刺激と遊びを与えるサービスを開発しています。
        </div>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </>
    </>
  );
}

export default MyApp;
