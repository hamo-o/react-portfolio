"use client";

import { Global } from "@emotion/react";

import Head from "./head";
import reset from "@/styles/globalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        {children}
        <Global styles={reset} />
      </body>
    </html>
  );
}
