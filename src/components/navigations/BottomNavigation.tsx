import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { cursorState } from "@/utils/atom";

import Flex from "../common/Flex";
import { colors } from "@/styles/theme";
import Text from "../common/Text";

const BottomNavigation = ({ progress }: { progress: number }) => {
  const setCursorVariant = useSetRecoilState(cursorState);

  const projectEnter = () => {
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorVariant("default");
  };

  const array = [0, 1, 2];

  return (
    <NavigationWrapper height="14vh" gap={4}>
      {array.map((page, idx) => (
        <NavigationItem
          key={idx}
          selected={
            +progress.toFixed(1) >= +(idx / (array.length - 1)).toFixed(1)
          }
          style={{ width: idx === 0 ? "max-content" : "100%" }}
        >
          {idx !== 0 && <NavigationLine />}
          <NavigationFlag
            width="min-content"
            direction="column"
            gap={4}
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            <Text typo="number2" color="primary_white">
              0{page}
            </Text>
            <NavigationDot />
          </NavigationFlag>
        </NavigationItem>
      ))}
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled(Flex)`
  padding: 0 6rem;

  position: fixed;
  bottom: 0;
`;

const NavigationItem = styled(motion.div)<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 4;
  opacity: ${({ selected }) => (selected ? 100 : 50)}%;
`;

const NavigationFlag = styled(Flex)`
  padding-bottom: 1.2rem;
  cursor: pointer;
`;

const NavigationDot = styled.div`
  width: 0.6rem;
  height: 0.6rem;

  border-radius: 50%;

  background: ${colors.primary_white};
`;

const NavigationLine = styled(motion.div)`
  width: 100%;
  height: 2px;

  background: ${colors.primary_white};
`;

export default BottomNavigation;
