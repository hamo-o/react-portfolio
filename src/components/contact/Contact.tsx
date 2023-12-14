import styled from "@emotion/styled";
import Link from "next/link";
import { motion } from "framer-motion";

import Icon from "../icons/Icon";
import Flex from "../common/Flex";
import Text from "../common/Text";
import { media } from "@/styles/theme";

const Contact = () => {
  return (
    <Icons>
      <IconWrapper
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
      >
        <LinkWrapper href="https://github.com/hamo-o">
          <Icon icon="Github" width={40} height={40} fill="primary_white" />
          <Text
            typo="body3"
            color="primary_white"
            style={{ whiteSpace: "nowrap" }}
          >
            hamo-o
          </Text>
        </LinkWrapper>
      </IconWrapper>
      <IconWrapper
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
      >
        <Icon icon="Mail" width={46} height={46} color="primary_white" />
        <Text typo="body3" color="primary_white">
          yheel6@naver.com
        </Text>
      </IconWrapper>
    </Icons>
  );
};

const Icons = styled(Flex)`
  gap: 50px;

  ${media.mobile} {
    gap: 2rem;
  }
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.mobile} {
    gap: 0.5rem;
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.mobile} {
    gap: 0.5rem;
  }

  cursor: pointer;
`;

export default Contact;
