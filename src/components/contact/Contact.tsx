import styled from "@emotion/styled";
import Link from "next/link";
import { motion } from "framer-motion";

import Icon from "../icons/Icon";
import Flex from "../common/Flex";
import Text from "../common/Text";

const Contact = () => {
  return (
    <Flex gap={50}>
      <IconWrapper
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
      >
        <LinkWrapper href="https://github.com/hamo-o">
          <Icon icon="Github" width={40} height={40} fill="primary_white" />
          <Text typo="body3" color="primary_white">
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
    </Flex>
  );
};

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
`;

export default Contact;
