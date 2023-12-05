import styled from "@emotion/styled";
import { motion, useSpring } from "framer-motion";
import { useSetRecoilState } from "recoil";

import { cursorState } from "@/utils/atom";

import Flex from "../common/Flex";
import { colors } from "@/styles/theme";
import Text from "../common/Text";

const BottomNavigation = ({
  progress,
  motion,
}: {
  progress: number;
  motion: any;
}) => {
  const setCursorVariant = useSetRecoilState(cursorState);

  const projectEnter = () => {
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorVariant("default");
  };

  const scaleX = useSpring(motion, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const array = [0, 1, 2];

  console.log(document.body.style.backgroundColor);

  return (
    <NavigationWrapper height="14vh" justify="space-between">
      {array.map((page, idx) => (
        <NavigationItem
          key={idx}
          width="max-content"
          // width={idx === 0 ? "max-content" : "100%"}
          gap={4}
        >
          {/* {idx !== 0 && <NavigationLine style={{ scaleX }} />} */}
          <NavigationFlag
            width="min-content"
            direction="column"
            gap={4}
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
            selected={
              +progress.toFixed(1) >= +(idx / (array.length - 1)).toFixed(1)
            }
          >
            <Text typo="number2" color="primary_white">
              0{page}
            </Text>
            <NavigationDot />
          </NavigationFlag>
        </NavigationItem>
      ))}
      <NavigationLine style={{ scaleX }} />
      <NavigationLine style={{ transformOrigin: "100%", opacity: "50%" }} />
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled(Flex)`
  padding: 0 6rem;

  position: fixed;
  bottom: 0;
`;

const NavigationItem = styled(Flex)``;

const NavigationFlag = styled(Flex)<{ selected: boolean }>`
  padding-bottom: 1.2rem;
  cursor: pointer;

  opacity: ${({ selected }) => (selected ? 100 : 50)}%;
`;

const NavigationDot = styled.div`
  width: 0.6rem;
  height: 0.6rem;

  border-radius: 50%;

  background: ${colors.primary_white};
`;

const NavigationLine = styled(motion.div)`
  width: calc(100% - 14rem);
  height: 2px;
  padding: 0 6rem;

  background: ${colors.primary_white};

  transform-origin: 0%;

  position: fixed;
  left: 7rem;
  overflow: hidden;
`;

export default BottomNavigation;
