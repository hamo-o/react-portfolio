import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";

const ProfilePage = () => {
  return (
    <ProfileWrapper direction="column">
      <Text typo="title1">이것저것 글</Text>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(Flex)`
  height: 100vh;
`;

export default ProfilePage;
