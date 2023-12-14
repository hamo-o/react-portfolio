import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Flex from "./Flex";
import { colors } from "@/styles/theme";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MOBILE } from "@/constants/size";

interface Position {
  x: number;
  y: number;
}

const PageTransform = ({ position }: { position: Position }) => {
  const window = useWindowSize();

  return (
    <PageBackground width="100vw" height="100vh">
      <MotionCircle
        initial={{ width: "4rem", height: "4rem", borderWidth: "20rem" }}
        animate={{
          width: window.width >= MOBILE ? "200vw" : "200vh",
          height: window.width >= MOBILE ? "200vw" : "200vh",
          borderWidth: "1rem",
        }}
        transition={{ duration: 1, type: "tween" }}
        position={position}
      />
    </PageBackground>
  );
};

const PageBackground = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10000;
`;

const MotionCircle = styled(motion.div)<{ position: Position }>`
  position: absolute;

  border-radius: 50%;
  border: 1rem solid ${colors.primary_purple};
`;

export default PageTransform;
