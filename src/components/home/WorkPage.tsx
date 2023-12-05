import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "@/styles/theme";
import Spacing from "../common/Spacing";

const WorkPage = () => {
  return (
    <WorkWrapper id="work" direction="column">
      <Text typo="title1"></Text>
    </WorkWrapper>
  );
};

const WorkWrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  background: ${colors.primary_yellow};

  position: relative;
`;

export default WorkPage;
