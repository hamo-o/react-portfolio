import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "@/styles/theme";
import Contact from "../contact/Contact";

const FinalPage = () => {
  return (
    <WorkWrapper id="final" direction="column" gap={40}>
      <Text
        typo="body1"
        color="primary_white"
        style={{ textDecorationLine: "underline" }}
      >
        Contact
      </Text>
      <Contact />
    </WorkWrapper>
  );
};

const WorkWrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;

  padding: 6rem;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  background: linear-gradient(
    to left,
    ${colors.primary_purple_30},
    rgba(0, 0, 0, 0)
  );

  position: relative;
  overflow-y: hidden;
`;

export default FinalPage;
