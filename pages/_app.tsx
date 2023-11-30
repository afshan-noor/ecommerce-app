import Navbar from "@/component/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/utils/CartContext";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
