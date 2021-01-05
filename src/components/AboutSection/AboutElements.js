import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'area2 area1'` : `'area1 area2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'area1' 'area2'` : `'area1 area1' 'area2 area2'`};
  }
`;

export const Column1 = styled.div`
  margin-top: 150px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: area1;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Column2 = styled.div`
  margin-top: 50px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: area2;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled(motion.h1)`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1E3E23")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#1E3E23" : "#fff")};
`;

export const BtnWrap = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
