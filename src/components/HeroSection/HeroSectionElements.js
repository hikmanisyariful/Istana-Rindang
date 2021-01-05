import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

export const Section = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e3e23;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);
  grid-template-areas: "area1 area2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "area1 area1" "area2 area2";
    grid-grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  grid-area: area1;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
`;

export const HeroH1 = styled(motion.h1)`
  color: #fff;
  font-size: 65px;
  // text-align: center;
  margin-bottom: 1rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 55px;
    font-weight: 400;
  }

  @media screen and (max-width: 480px) {
    font-size: 38px;
    font-weight: 400;
  }
`;

export const HeroBold = styled.span`
  color: #2bba00;
  font-weight: 700;
`;

export const HeroP = styled(motion.p)`
  margin-top: 50px;
  margin-right: 150px;
  margin-bottom: 50px;
  color: #fffafa;
  font-size: 24px;
  // text-align: center;
  max-width: 600px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 300;
    margin-right: 0;
    margin-top: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    font-weight: 300;
    margin-right: 0;
  }
`;

export const HeroBtnWrapper = styled(motion.div)`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
`;

export const ColumnRight = styled.div`
  grid-area: area2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    margin-top: -50px;
  }
`;

export const ImgWrap = styled(motion.div)`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 768px) {
    max-width: 300px;
    height: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  // margin: 0 0 10px 0;
  // padding-right: 0;
  margin-top: 0px;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;
