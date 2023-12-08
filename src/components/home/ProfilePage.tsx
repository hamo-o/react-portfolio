import styled from "@emotion/styled";

import Flex from "../common/Flex";
import { colors } from "@/styles/theme";

import Skills from "../profile/Skills";
import AboutMe from "../profile/AboutMe";
import Experience from "../profile/Experience";

const ProfilePage = () => {
  return (
    <ProfileWrapper id="profile">
      <AboutMe />
      <Skills />
      <Experience />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100vw;

  padding: 6rem 8rem 0;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  overflow-y: scroll;

  background: ${colors.primary_black};
`;

export default ProfilePage;
