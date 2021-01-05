import React from "react";
import { FaBars } from "react-icons/fa";
import LogoRindang from "../../assets/images/new_logo.png";

import {
  Nav,
  NavbarContainer,
  // NavLogo,
  NavLogoIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* <NavLogo>Rindang</NavLogo> */}
          <NavLogoIcon to="/" src={LogoRindang} />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">BERANDA</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">TENTANG</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">PROGRAM KAMI</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">GALERI</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">CARA DONASI</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">KONTAK</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">BLOG</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
