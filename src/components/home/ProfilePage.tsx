import styled from "@emotion/styled";

import Flex from "../common/Flex";
import { colors } from "@/styles/theme";

import Skills from "../profile/Skills";
import AboutMe from "../profile/AboutMe";
import Experience from "../profile/Experience";

const ProfilePage = () => {
  return (
    <ProfileWrapper
      id="profile"
      width="100vw"
      height="100vh"
      direction="column"
      justify="start"
      gap={80}
    >
      <Skills />
      <AboutMe />
      <Experience />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(Flex)`
  padding: 6rem;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  background: ${colors.primary_yellow};
`;

export default ProfilePage;
