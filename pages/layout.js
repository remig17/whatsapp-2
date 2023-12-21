import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Ajoutez ici d'autres balises meta et liens vers des feuilles de style si nécessaire */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
