import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "@/styles/theme";

const ProfilePage = () => {
  return (
    <ProfileWrapper direction="column">
      <Text typo="title1"></Text>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  background: ${colors.primary_yellow};
`;

export default ProfilePage;
