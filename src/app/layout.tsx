"use client";

import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { useRef } from "react";
import useMouse from "@react-hook/mouse-position";

import Head from "./head";
import reset from "@/styles/globalStyles";
import Cursor from "@/components/common/Cursor";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const mouseRef = useRef(null);
  const mouse = useMouse(mouseRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  let mouseXPosition: number = 0;
  let mouseYPosition: number = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.x;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.y;
  }

  return (
    <RecoilRoot>
      <html lang="en">
        <Head />
        <body ref={mouseRef}>
          <Cursor position={{ x: mouseXPosition, y: mouseYPosition }} />
          {children}
          <Global styles={reset} />
        </body>
      </html>
    </RecoilRoot>
  );
};

export default RootLayout;
