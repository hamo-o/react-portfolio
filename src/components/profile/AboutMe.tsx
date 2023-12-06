import Flex from "../common/Flex";
import Text from "../common/Text";
import Line from "../common/Line";

const AboutMe = () => {
  return (
    <Flex gap={32} align="start">
      <Text typo="title1" color="primary_white" style={{ width: "100%" }}>
        About Me
      </Text>
      <Flex direction="column" align="start" gap={20}>
        <Text typo="body2" color="primary_white">
          2001년 11월 21일 출생
        </Text>

        <Line height={1.5} color="primary_white" />

        <Flex justify="space-between">
          <Text typo="body2" color="primary_white">
            충북여자고등학교 졸업
          </Text>
          <Text
            typo="body2"
            color="primary_white_60"
            style={{ whiteSpace: "nowrap" }}
          >
            2017. 03 ~ 2020. 02
          </Text>
        </Flex>

        <Line height={1.5} color="primary_white" />

        <Flex justify="space-between">
          <Text typo="body2" color="primary_white">
            홍익대학교 시각디자인과 • 컴퓨터공학과 복수전공
          </Text>
          <Text
            typo="body2"
            color="primary_white_60"
            style={{ whiteSpace: "nowrap" }}
          >
            2020. 03 ~
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
