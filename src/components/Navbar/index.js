import React from "react";
import {
  NavbarContainer,
  NavbarWrap,
  NavbarElements,
  NavLinks,
  NavLogoLinks,
  NavRight,
  NavLeft,
  Img,
  NavLinkButtons,
  MobileIcon,
} from "./NavbarElements";
import logo from "./logodocker.jpg";
import { RiSearchLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrap>
          <NavRight>
            <NavbarElements>
              <NavLogoLinks to="/">docker</NavLogoLinks>
            </NavbarElements>
            <NavbarElements>
              <NavLinks to="/">Products</NavLinks>
            </NavbarElements>
            <NavbarElements>
              <NavLinks to="/">Developers</NavLinks>
            </NavbarElements>
            <NavbarElements>
              <NavLinks to="/">Pricing</NavLinks>
            </NavbarElements>
            <NavbarElements>
              <NavLinks to="/">Blog</NavLinks>
            </NavbarElements>
            <NavbarElements>
              <NavLinks to="/">About Us</NavLinks>
            </NavbarElements>
            <NavbarElements>
              <NavLinks to="/">Partners</NavLinks>
            </NavbarElements>
          </NavRight>
          <NavLeft>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavbarElements>
              <NavLinks>
                <RiSearchLine
                  style={{
                    fontWeight: "bold",
                    position: "relative",
                    left: "35px",
                    top: "2px",
                    color: "white",
                  }}
                />
              </NavLinks>
              <NavLinks to="/"> Sign In</NavLinks>
            </NavbarElements>
            <NavbarElements>
              <NavLinkButtons to="/">Get Started</NavLinkButtons>
            </NavbarElements>
          </NavLeft>
        </NavbarWrap>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
