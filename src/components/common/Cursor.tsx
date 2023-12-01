import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { useRecoilValue } from "recoil";
import { cursorState } from "@/utils/atom";
import { mouseVariants, spring } from "@/constants/animate";

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
  position: absolute;
  z-index: 1000;

  border: 3px solid ${colors.primary_purple};
  border-radius: 50%;

  backdrop-filter: blur(3px);
  background-size: cover;
`;

export default Cursor;
