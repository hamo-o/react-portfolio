import styled from "@emotion/styled";
import { motion, useSpring } from "framer-motion";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { cursorState } from "@/utils/atom";
import { PAGE } from "@/models/page";

import Flex from "../common/Flex";
import { KeyOfColor, colors } from "@/styles/theme";
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
    setCursorVariant("navigation");
  };

  const projectLeave = () => {
    setCursorVariant("default");
  };

  const handleClickMenu = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const MemuData = (e.target as HTMLAnchorElement).hash;
    const IdMatchedPage = document.querySelector(MemuData);

    IdMatchedPage?.scrollIntoView({ behavior: "smooth" });
  };

  const scaleX = useSpring(motion, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <NavigationWrapper height="14vh" justify="space-between">
      {PAGE.map((page) => (
        <NavigationItem key={page.id} width="max-content" gap={4}>
          <NavigationFlag
            href={`#${page.name}`}
            onClick={handleClickMenu}
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
            selected={
              +progress.toFixed(1) >= +(page.id / (PAGE.length - 1)).toFixed(1)
            }
          >
            <Text typo="number2" color="primary_white">
              0{page.id}
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

const NavigationFlag = styled.a<{
  selected: boolean;
}>`
  width: min-content;
  padding-bottom: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  cursor: pointer;

  opacity: ${({ selected }) => (selected ? 100 : 50)}%;
  z-index: 2;
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
