import styled from "styled-components";
import { Link as Links } from "react-router-dom";

export const NavbarContainer = styled.div`
  background: #2496ed;
  padding: 10px;
`;
export const NavbarWrap = styled.ul`
  margin: -5px;
  background: #2496ed;
  padding: 20px;
`;
export const NavbarElements = styled.li`
  display: inline;
  list-style-type: none;
`;
export const NavLogoLinks = styled(Links)`
position: relative;
bottom: 10px;
  color: white;
  text-decoration: none;
  outline: none;
  margin: 20px;
  padding: 25px;
  font-size: 30px;
  font-weight: 600;
  transition: fill 0.3s ease;
`;

export const NavLinks = styled(Links)`
  text-decoration: none;
  outline: none;
  margin: 20px;
  color: white;
  font-weight: 600;

  &:hover{
      text-decoration: underline;
  }

  @media screen and (max-width: 990px){
      display: none;
  }
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const NavLeft = styled.div`
  margin-top: -40px;
  display: flex;
  justify-content: flex-end;
`;

export const Img = styled.img`
  width: 80px;
`;

export const NavLinkButtons = styled(Links)`
   text-decoration: none;
  outline: none;
  margin: 20px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 600;
  background: #003f8c;
  border-radius: 5px;

  &:hover{
    background: white;
    color: #2496ed;
    transition: 0.2s ease-in-out;

  }
  @media screen and (max-width: 990px){
      display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 990px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: aliceblue;
  }
`;
