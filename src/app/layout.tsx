"use client";

import Head from "next/head";
import { Global } from "@emotion/react";
import reset from "@/styles/globalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Global styles={reset} />
      <html lang="en">
        <Head>
          <title>Ham</title>
          <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/nats" />
        </Head>
        <body>{children}</body>
      </html>
    </>
  );
}
