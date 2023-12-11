import { useState, useRef } from "react";
import styled from "@emotion/styled";
import { motion, useScroll } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

import { cursorState } from "@/utils/atom";

import Flex from "../common/Flex";
import Text from "../common/Text";
import NextImage from "../common/NextImage";
import Icon from "../icons/Icon";

import { calcRem, colors } from "@/styles/theme";
import { Work } from "@/models/work";

const CardSmall = ({ work, onClick }: { work: Work; onClick?: any }) => {
  const setCursorVariant = useSetRecoilState(cursorState);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const projectEnter = () => {
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorVariant("default");
  };

  return (
    <CardWrapper onMouseEnter={projectEnter} onMouseLeave={projectLeave}>
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
            style={{ wordBreak: "keep-all" }}
          >
            {work.name}
          </Text>
        </Flex>
        <TextWrapper onClick={() => router.push(work.link)}>
          <Text typo="detail" color="primary_black_60">
            전체 자료 보러가기 ⇢
          </Text>
        </TextWrapper>
      </Flex>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 32rem;
  aspect-ratio: 16/9;

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

  scroll-snap-align: center;
`;

const TextWrapper = styled.div`
  padding-top: 0.5rem;
`;

export default CardSmall;
