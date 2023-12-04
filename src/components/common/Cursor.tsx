import styled from "@emotion/styled";
import { color, motion } from "framer-motion";

import { useRecoilValue } from "recoil";
import { cursorState } from "@/utils/atom";
import { mouseVariants } from "@/constants/animate";
import { spring } from "@/constants/animate";

import { colors } from "@/styles/theme";

interface Position {
  x: number;
  y: number;
}

const Cursor = ({ position }: { position: Position }) => {
  const variant = useRecoilValue(cursorState);

  return (
    <CursorWrapper
      variants={mouseVariants(position)}
      animate={variant}
      transition={spring}
    />
  );
};

const CursorWrapper = styled(motion.div)`
  position: fixed;
  z-index: 1000;

  border-radius: 50%;
  background-size: cover;
`;

export default Cursor;
