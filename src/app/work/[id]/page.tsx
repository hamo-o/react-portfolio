"use client";

import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useResetRecoilState } from "recoil";
import useDebounce from "@/hooks/useDebounce";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cursorState } from "@/utils/atom";

import Flex from "@/components/common/Flex";
import Text from "@/components/common/Text";
import { colors } from "@/styles/theme";

const WorkDetailPage = ({ params }: { params: { id: number } }) => {
  const resetCursor = useResetRecoilState(cursorState);
  useEffect(() => {
    resetCursor();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const [scroll, setScroll] = useState<number>(0);
  const debounceScroll = useDebounce(scroll, 200);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <WorkDetailWrapper height="100vh" direction="column">
      <Text typo="subtitle1" color="primary_white">
        디테일 {params.id}페이지입니다.
        <br />
        {debounceScroll * 100}%
      </Text>
      <WorkDetailContent height="max-content" ref={scrollRef}>
        <Wave
          initial={{ height: 0 }}
          animate={{ height: `${scroll * 100}%` }}
        />
        <Wave style={{ height: "100%" }} />
        <Text typo="subtitle1" color="primary_white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est velit
          totam quo quisquam repellat vel quam rem accusamus earum autem! Eum
          quos placeat porro, quo excepturi eveniet soluta provident odit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates,
          iste libero ad dicta quidem doloremque eos distinctio ex quibusdam
          maiores fugit adipisci recusandae dolores! Facere consequuntur
          voluptas dicta eaque! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptatibus distinctio dolorum quae ipsum earum sit
          laborum qui at soluta, odit amet animi, ea illum ipsam accusamus sint
          eos hic repellat? Alias illo minima quaerat iste impedit aliquam
          suscipit. Illum numquam magni, tempora nam id ab nobis dignissimos
          incidunt magnam tempore et, omnis, quo illo quam voluptatem beatae
          labore consequuntur quaerat. Inventore alias nisi, assumenda amet
          architecto modi voluptas illo adipisci facilis iusto eius, quaerat
          quisquam! Sint, voluptas quo! Deleniti eos harum officiis accusantium
          quis. Repellendus illum provident consequuntur neque ut. Soluta beatae
          iure earum molestias minus non quas repellat ab, rem fuga error dolor
          modi laboriosam nam harum ex autem consequatur maiores explicabo saepe
          distinctio quaerat voluptate nisi aliquam. Similique. Minus ab maiores
          consequatur quasi voluptatibus corrupti nihil omnis sit, fugiat optio
          ex adipisci minima amet voluptatem illo magnam praesentium excepturi
          sed vitae harum, labore nam. Vero illo vel consequatur! Obcaecati
          tenetur at id officia porro veritatis, doloremque voluptatibus eius
          harum laboriosam nobis qui repudiandae natus ipsa nisi eligendi
          repellendus? Voluptas perspiciatis eos voluptates sunt amet minus
          tempora accusantium doloremque! Recusandae, exercitationem numquam.
          Assumenda molestias recusandae aperiam autem optio est laboriosam at.
          Architecto, vel ab neque consectetur aliquid hic reprehenderit natus
          eligendi, ex aperiam enim sequi numquam repellendus aut pariatur. Aut
          nulla inventore est commodi, incidunt ipsum laudantium eaque hic amet.
          Tempora velit repudiandae voluptate ipsa, ut quos impedit dolor ex,
          facere, tempore architecto eum reiciendis. Deleniti veritatis ducimus
          est. Ipsum sint similique, sunt asperiores voluptate aspernatur
          consectetur veritatis dolor aut magnam totam ab aliquid earum ipsa
          debitis vitae velit beatae iure itaque? Libero vero sequi facere
          deserunt voluptatum fuga. Accusantium, adipisci assumenda. Itaque,
          repudiandae? Dignissimos culpa asperiores ipsa deleniti, id facere vel
          eligendi, repellat ex ea voluptate tempora doloremque fugiat. Enim
          laborum nostrum commodi doloremque, quos vel delectus ducimus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Placeat, repellat
          debitis modi sequi voluptate esse nisi commodi minima quaerat aut
          autem voluptas eos dolorem impedit minus enim officia natus illum!
          Explicabo ipsum ipsam amet aut a, architecto itaque tempora iusto
          autem iure hic inventore natus dolorum deleniti placeat tenetur omnis
          eligendi sint! Cumque, quae perferendis excepturi doloribus neque
          assumenda iste! Quas esse ex dolore voluptate sint consequuntur ut
          molestiae fugiat maxime praesentium ratione temporibus voluptatibus
          quidem dolor voluptatum saepe provident, eius veniam aspernatur.
          Culpa, facere assumenda similique minima ab earum. Rerum, culpa! Nam
          aliquam quos mollitia impedit ipsam ex quae excepturi iste beatae
          iure, maiores numquam deleniti voluptas cum animi fugiat nobis,
          accusantium incidunt. Exercitationem praesentium saepe quis quibusdam
          repudiandae. Sint temporibus eligendi alias maxime assumenda ex id
          tempora magnam, eos exercitationem ipsum nihil repudiandae aliquid
          molestiae quibusdam voluptatum quasi in autem perferendis corporis
          enim ipsa suscipit praesentium a. Iusto. Sit alias et, dolorum eius,
          quas porro illo magnam magni rem atque placeat earum omnis excepturi
          deleniti mollitia modi culpa at. Iste nihil, voluptates animi id sint
          harum consequatur quam? A, aut repellendus rerum exercitationem
          perspiciatis nostrum! Ad quas eveniet suscipit necessitatibus
          quibusdam accusamus pariatur odit possimus dolorem neque vel voluptas
          nihil, assumenda, cumque sed repellendus porro. Enim, sequi
          dignissimos? Excepturi esse non facere magni quo, ullam dolores
          itaque. Natus, quae saepe illo soluta earum rerum, quod doloribus
          dolorem totam nisi alias temporibus nemo amet est sed. Reprehenderit,
          a inventore? Nesciunt ratione, modi quo labore enim porro animi
          cupiditate minus, corrupti corporis consectetur eveniet beatae sunt,
          voluptates facilis molestiae nostrum quas inventore? Aliquam, optio!
          Pariatur est inventore libero hic expedita. Explicabo natus hic cum
          dignissimos minima corrupti consequuntur vel omnis expedita dolor
          ipsum nobis temporibus, molestiae maiores beatae odit, blanditiis sint
          vero quisquam eaque veniam eveniet rerum magni. Dolor, veritatis!
        </Text>
      </WorkDetailContent>
    </WorkDetailWrapper>
  );
};

const WorkDetailWrapper = styled(Flex)`
  padding: 6rem 6rem 0;

  overflow: hidden;
`;

const Wave = styled(motion.div)`
  width: 4px;
  background: ${colors.primary_white};

  position: absolute;
  top: 0;
`;

const WorkDetailContent = styled(Flex)`
  overflow-y: scroll;
  position: relative;
`;

export default WorkDetailPage;
