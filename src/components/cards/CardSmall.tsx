import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";

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

  const projectEnter = () => {
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorVariant("default");
  };

  return (
    <CardContainer align="start" gap={32}>
      <CardWrapper
        onClick={onClick}
        onMouseEnter={projectEnter}
        onMouseLeave={projectLeave}
        onMouseDown={() => setIsOpen(true)}
        onMouseUp={() => setIsOpen(false)}
      >
        <Flex
          height="100%"
          direction="column"
          align="end"
          justify="space-between"
        >
          <Flex direction="column" align="start" gap={10}>
            <Text
              typo="number2"
              color="primary_black"
              style={{ whiteSpace: "nowrap" }}
            >
              {work.date}
            </Text>
            <Text typo="subtitle1" color="primary_black">
              {work.name}
            </Text>
          </Flex>
          <Text typo="detail" color="primary_black_60">
            전체 자료 보러가기 ⇢
          </Text>
        </Flex>
      </CardWrapper>

      <DetailWrapper width="70vw" direction="column" gap={16}>
        {work.detail &&
          work.detail.map((detail, idx) => (
            <Image
              width="100%"
              key={idx}
              src={`/images/${detail}`}
              alt={detail}
            />
          ))}
      </DetailWrapper>
    </CardContainer>
  );
};

const CardContainer = styled(Flex)``;

const CardWrapper = styled.div`
  width: 30vw;
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

const CardContent = styled(Flex)``;

const DetailWrapper = styled(Flex)``;

const Image = styled.img`
  border-radius: 2rem;
`;

export default CardSmall;
