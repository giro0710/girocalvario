import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gian Roi Calvario",
  description: "My personal portfolio",
};

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"]
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "500", "700", "900"]
});

const baybayin = localFont({
  src: "./_fonts/Baybayin.ttf",
  variable: "--font-baybayin",
  weight: "100 900"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} ${baybayin.variable} antialised`}>
        {children}
      </body>
    </html>
  );
}
