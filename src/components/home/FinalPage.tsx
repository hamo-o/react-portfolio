import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "@/styles/theme";
import Spacing from "../common/Spacing";

const FinalPage = () => {
  return (
    <WorkWrapper id="final" direction="column">
      <Spacing
        width="48vw"
        height="120vh"
        style={{
          background: colors.primary_yellow,
          borderRadius: "0 50% 50% 0",
          position: "absolute",
          left: "0",
        }}
      />
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

  background: ${colors.primary_black};

  position: relative;
  overflow-y: hidden;
`;

export default FinalPage;
