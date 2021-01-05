import React from "react";

import { AboutVariant } from "./AboutVariant";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap
} from "./AboutElements";

const AboutSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  headline,
  darkText,
  description1,
  description2,
  buttonLabel,
  primary,
  dark,
  dark2
}) => {
  const fadeRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading
                  lightText={lightText}
                  variants={fadeRight}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1 }}
                >
                  {headline}
                </Heading>
                <Subtitle
                  darkText={darkText}
                  variants={fadeRight}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1.5 }}
                >
                  {description1}
                </Subtitle>
                <Subtitle
                  darkText={darkText}
                  variants={fadeRight}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1.5 }}
                >
                  {description2}
                </Subtitle>
                <BtnWrap
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                >
                  <Button to="home">{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <AboutVariant />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutSection;
