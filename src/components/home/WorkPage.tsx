import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";

import Flex from "../common/Flex";
import Text from "../common/Text";
import Icon from "../icons/Icon";

import { colors } from "@/styles/theme";
import { pageState } from "@/utils/atom";

const WorkPage = () => {
  const router = useRouter();
  const setPage = useSetRecoilState(pageState);

  return (
    <WorkWrapper
      id="work"
      width="100vw"
      height="100vh"
      direction="column"
      align="start"
      justify="start"
    >
      <Text
        typo="body1"
        color="primary_black"
        style={{ width: "80vw", textDecorationLine: "underline" }}
      >
        Work
      </Text>
      <Works height="100%">
        <IconWrapper onClick={() => router.push("/work/1")}>
          <Icon icon="Start" fill="primary_purple" />
        </IconWrapper>
      </Works>
    </WorkWrapper>
  );
};

const WorkWrapper = styled(Flex)`
  padding: 6rem;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  background: ${colors.primary_yellow};

  position: relative;
`;

const Works = styled(Flex)`
  padding-bottom: 6rem;
`;

const IconWrapper = styled(motion.div)`
  cursor: pointer;
`;

export default WorkPage;
