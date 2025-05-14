import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import 'remixicon/fonts/remixicon.css'


const inter = Inter({
  variable: "--font-geist-sans",
  weight: ['400', '500', '300','700'], // opcional
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
        className={`${inter.variable} antialiased`}
      >
        <div>
          <Header />
          <Menu />
        </div>
        <div className="flex justify-end p-20">
          <div className="w-[calc(100%-246px)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
