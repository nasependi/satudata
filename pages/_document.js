import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <meta name="description" content="NoteBook Blog Travel" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://upload.wikimedia.org/wikipedia/commons/d/d4/Lambang_Kabupaten_Garut.svg"
            sizes="32x32"
          />
        </Head>
        <body className="min-h-screen bg-white font-inter tracking-tighter text-gray-800 antialiased selection:bg-success-400 selection:text-white dark:bg-slate-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
