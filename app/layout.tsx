import AuthSessionProvider from "./AuthSessionProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthy - Dieta Semanal",
  description: "Crie sua dieta semanal de forma fácil e rápida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <AuthSessionProvider>
        <body
          className={`bg-gray-700 flex flex-col justify-between ${inter.className}`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </AuthSessionProvider>
    </html>
  );
}
