import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { color, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";

import { cursorState, pageState } from "@/utils/atom";
import { mouseVariants } from "@/constants/animate";
import { spring } from "@/constants/animate";
import PageTransform from "./PageTransform";

interface Position {
  x: number;
  y: number;
}

const Cursor = ({ position }: { position: Position }) => {
  const variant = useRecoilValue(cursorState);
  const [show, setShow] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, [path]);

  return (
    <>
      <CursorWrapper
        variants={mouseVariants(position)}
        animate={variant}
        transition={spring}
      />
      {show && <PageTransform position={{ x: position.x, y: position.y }} />}
    </>
  );
};

const CursorWrapper = styled(motion.div)`
  position: fixed;
  z-index: 1000;

  border-radius: 50%;
  background-size: cover;
`;

export default Cursor;
