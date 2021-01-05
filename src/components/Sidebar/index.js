import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            TENTANG
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            PROGRAM KAMI
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            GALERI
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            CARA DONASI
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            KONTAK
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            BLOG
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
