import styled from "@emotion/styled";

import { colors } from "@/styles/theme";
import Flex from "../common/Flex";

import Icon from "../icons/Icon";

const LandingPage = () => {
  return (
    <LandingWrapper direction="column" justify="top" gap={68}>
      <LandingBackground />
      <Icon icon="Star" fill="primary_yellow" />
    </LandingWrapper>
  );
};

const LandingWrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
`;

const LandingBackground = styled.div`
  width: 100%;
  height: 80vh;
  background: ${colors.primary_yellow};
`;

export default LandingPage;
