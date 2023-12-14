import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

import { cursorState } from "@/utils/atom";

import Flex from "../common/Flex";
import Text from "../common/Text";

import { calcRem, colors, media } from "@/styles/theme";
import { Work } from "@/models/work";
import { selectedVairants } from "@/constants/animate";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MOBILE } from "@/constants/size";

const CardSmall = ({
  work,
  onClick,
  selected,
}: {
  work: Work;
  onClick?: any;
  selected: boolean;
}) => {
  const setCursorVariant = useSetRecoilState(cursorState);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const window = useWindowSize();

  const projectEnter = () => {
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorVariant("default");
  };

  return (
    <CardWrapper
      onMouseEnter={projectEnter}
      onMouseLeave={projectLeave}
      variants={selectedVairants}
      animate={selected ? "selected" : "default"}
    >
      <Flex
        height="100%"
        direction="column"
        align="end"
        justify="space-between"
      >
        <Flex direction="column" align="start" gap={10} onClick={onClick}>
          <Text
            typo="number2"
            color="primary_black"
            style={{ whiteSpace: "nowrap" }}
          >
            {work.date}
          </Text>
          <Text
            typo="subtitle1"
            color="primary_black"
            style={{
              wordBreak: window.width > MOBILE ? "keep-all" : "break-word",
              fontSize: window.width > MOBILE ? "" : "1.3rem",
            }}
          >
            {work.name}
          </Text>
        </Flex>
        {work.link && (
          <TextWrapper
            onClick={() => work.link && router.push(work.link)}
            initial={{ color: colors.primary_black_60 }}
            whileHover={{
              color: selected ? colors.primary_yellow : colors.primary_black_60,
            }}
          >
            <Text typo="detail">전체 자료 보러가기 ⇢</Text>
          </TextWrapper>
        )}
      </Flex>
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  width: 24vw;
  min-width: 400px;
  aspect-ratio: 12/9;

  padding: ${calcRem(56)};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${colors.primary_yellow};
  border-radius: 2rem;

  background: linear-gradient(
    to bottom,
    ${colors.primary_purple},
    ${colors.primary_white_30}
  );

  cursor: pointer;

  ${media.mobile} {
    min-width: 280px;
    height: 140px;
    padding: ${calcRem(30)};
  }
`;

const TextWrapper = styled(motion.div)`
  padding-top: 0.5rem;
`;

export default CardSmall;
