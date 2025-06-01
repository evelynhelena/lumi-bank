
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Header from "@/components/Header";
import Menu from "@/components/Menu";

import ReactQueryProvider from "@/components/ReactQueryProvider";


const inter = Inter({
  weight: ['400', '500', '300', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LumiPay",
  description: "LumiPay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased !bg-white`}
      >
        <ReactQueryProvider>
          <div>
            <Header />
            <Menu />
          </div>
          <div className="flex justify-end p-20">
            <div className="w-full md:w-[calc(100%-246px)]">
              {children}
            </div>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
