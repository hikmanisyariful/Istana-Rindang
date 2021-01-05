import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Foto1 from "../../assets/images/foto1.png";
import Foto2 from "../../assets/images/foto2.png";
import Foto3 from "../../assets/images/foto3.png";
import Foto4 from "../../assets/images/foto4.png";
import Foto5 from "../../assets/images/foto5.png";
import Foto6 from "../../assets/images/foto6.png";

const HeroUl = styled(motion.ul)`
  width: 80%;
  height: 80%;
  display: grid;
  overflow: hidden;
  margin: 0;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
`;

const HeroLi = styled(motion.li)`
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
      staggerChildren: 0.2
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

export const HeroVariant = () => {
  return (
    <HeroUl
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {[Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto5, Foto4, Foto3].map(
        (foto, index) => (
          <HeroLi key={index} className="item" variants={item}>
            <Img src={foto} alt="foto" />
          </HeroLi>
        )
      )}
    </HeroUl>
  );
};
