import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Noto+Sans+JP:wght@400;500&family=Raleway:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="//db.onlinewebfonts.com/c/ee5e0963d4f220cba32a5765cc4f9772?family=PingFang+HK" rel="stylesheet" type="text/css"/>
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;
