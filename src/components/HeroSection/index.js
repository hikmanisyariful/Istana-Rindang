import React, { useState } from "react";
import HeroFoto from "../../assets/images/New-Hero.png";

import { Button } from "../ButtonElement";
import {
  Section,
  Container,
  ColumnLeft,
  HeroH1,
  HeroP,
  HeroBold,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ColumnRight,
  ImgWrap,
  Img
} from "./HeroSectionElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeBottom = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, y: 0, x: 0 }
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <HeroH1
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            SEDEKAH UNTUK <HeroBold>KEBAIKAN</HeroBold> SENDIRI
          </HeroH1>
          <HeroP
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2 }}
          >
            “Sedekah yang Allah sukai ialah sedekah dengan harta yang paling
            dicintai”
          </HeroP>
          <HeroBtnWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Button
              to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Lihat Artikel Disini {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </ColumnLeft>
        <ColumnRight>
          <ImgWrap
            variants={fadeBottom}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
          >
            <Img src={HeroFoto} alt="heroFoto" />
          </ImgWrap>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default HeroSection;
