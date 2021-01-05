import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Foto1 from "../../assets/images/about1.png";
import Foto2 from "../../assets/images/about2.png";
import Foto3 from "../../assets/images/about3.png";
import Foto4 from "../../assets/images/about4.png";

const AboutUl = styled(motion.ul)`
  width: 90%;
  height: 90%;
  display: grid;
  overflow: hidden;
  margin: 0;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  border-style: solid;
  border-color: #1e3e23;
  border-width: 8px;
`;

const AboutLi = styled(motion.li)`
  background: white;
  border-radius: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const AboutVariant = () => {
  return (
    <AboutUl
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {[Foto1, Foto2, Foto3, Foto4].map((foto, index) => (
        <AboutLi key={index} className="item" variants={item}>
          <Img src={foto} alt="foto" />
        </AboutLi>
      ))}
    </AboutUl>
  );
};
