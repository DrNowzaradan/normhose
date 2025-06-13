

import React from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Normhose",
  description: "Normhose Hidrolik Hizmetleri",
};

const DefaultLayout = ({ children }) => {

  return (
    <html lang="tr">
      <body className={`${montserrat.variable} antialiased`}>
        <Header></Header>
        {children}
        <Footer></Footer>
        <GoogleAnalytics gaId="G-QH1GG2NC90"/>
      </body>
    </html>
  );
}

export default DefaultLayout
