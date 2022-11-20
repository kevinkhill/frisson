import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Frisson</title>
      <meta name="description" content="Simple landind page" />
      <meta name="keywords" content="" />
      <meta name="author" content="" />
      <script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-sea-anemone@2/tsparticles.preset.seaAnemone.bundle.min.js"></script>
      <Head />
      <body className="leading-normal tracking-normal text-white gradient">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
