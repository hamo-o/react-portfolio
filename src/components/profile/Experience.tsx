import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";
import Line from "../common/Line";

const Experience = () => {
  return (
    <ExperienceContainer height="100%" gap={32} align="start">
      <Text typo="title1" color="primary_white" style={{ width: "100%" }}>
        Experience
      </Text>
      <ExperienceContent
        height="100%"
        direction="column"
        align="start"
        justify="start"
        gap={20}
      >
        <Flex justify="space-between">
          <Flex direction="column" align="start" gap={8}>
            <Text typo="subtitle1" color="primary_white">
              오픈소스 컨트리뷰션 아카데미 Backend.AI 멘티
            </Text>
            <Text typo="body2" color="primary_white_60">
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
            </Text>
          </Flex>
        </Flex>

        <Line height={1.5} color="primary_white" />

        <Flex justify="space-between">
          <Flex direction="column" align="start" gap={8}>
            <Text typo="subtitle1" color="primary_white">
              외주연계형 IT 동아리 CMC 13기 • Web
            </Text>
            <Text typo="body2" color="primary_white_60">
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
            </Text>
          </Flex>
        </Flex>

        <Line height={1.5} color="primary_white" />

        <Flex justify="space-between">
          <Flex direction="column" align="start" gap={8}>
            <Text typo="subtitle1" color="primary_white">
              신촌 연합 IT 동아리 CEOS 16기 • FE
            </Text>
            <Text typo="body2" color="primary_white_60">
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
            </Text>
          </Flex>
        </Flex>

        <Line height={1.5} color="primary_white" />

        <Flex justify="space-between">
          <Flex direction="column" align="start" gap={8}>
            <Text typo="subtitle1" color="primary_white">
              전국 연합 IT 동아리 피로그래밍 17기
            </Text>
            <Text typo="body2" color="primary_white_60">
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
              법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이
              정하는 바에 의하여 퇴직하게 할 수 있다.
            </Text>
          </Flex>
        </Flex>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled(Flex)`
  padding-bottom: 6rem;
  overflow-y: hidden;
`;

const ExperienceContent = styled(Flex)`
  padding-bottom: 6rem;
  overflow-y: scroll;
`;

export default Experience;
