import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { cursorState } from "@/utils/atom";

import Flex from "../common/Flex";
import { KeyOfColor, colors } from "@/styles/theme";
import Text from "../common/Text";
import Icon from "../icons/Icon";

interface TopNavProp {
  title: string;
}

const TopNavigation = ({ title }: TopNavProp) => {
  const router = useRouter();
  const setCursorVariant = useSetRecoilState(cursorState);

  const handleMouseEnter = () => {
    setCursorVariant("navigation");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  return (
    <NavigationWrapper height={100} justify="space-between">
      <IconWrapper>
        <Icon
          icon="ArrowRight"
          width={35}
          height={35}
          rotate={180}
          fill="primary_white"
          onClick={() => router.back()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </IconWrapper>
      <Text typo="subtitle1" color="primary_white">
        {title}
      </Text>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled(Flex)`
  padding: 0 6rem;

  position: fixed;
  top: 0;
  z-index: 999;

  background: linear-gradient(
    to bottom,
    ${colors.primary_black},
    ${colors.primary_black_60}
  );

  backdrop-filter: blur(4px);
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

const Gradient = styled.div`
  width: 100%;
  height: 15%;

  position: fixed;
  bottom: 0;
  left: 0;

  background: linear-gradient(
    to top,
    ${colors.primary_black_60},
    rgba(0, 0, 0, 0)
  );
`;

export default TopNavigation;
