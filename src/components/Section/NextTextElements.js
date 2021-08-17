import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  background: ${({ On }) => (On ? "white" : "")};
  @media screen and (max-width: 768px) {
    padding-bottom: 100px;
  }
`;

export const TextWrapper = styled.div``;
export const TextH1 = styled.h1`
  height: 150px;
  text-align: center;
  font-size: 40px;
  max-width: 800px;
  color: #0b214a;
`;
export const TextNo = styled.ul`
  display: ${({ On }) => (On ? "none" : "block")};
  list-style: none;
`;
export const TextElt = styled.li`
  padding: 35px;
  color: #0b214a;
  text-align: center;
  display: inline;
  font-size: 40px;
  font-weight: 800;

  @media screen and (max-width: 990px) {
    display: block;
  }
`;
export const Button = styled(Link)`
  display: ${({ On }) => (On ? "none" : "inline")};

  position: relative;
  left: 320px;
  top: 80px;
  text-decoration: none;
  outline: none;
  margin: 20px;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 45px;
  padding-right: 45px;
  font-weight: 600;
  background: #2778d1;
  border-radius: 5px;

  &:hover {
    background: #0162cc;
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 950px) {
    left: 250px;
  }
`;

export const TextP = styled.p`
  display: ${({ On }) => (On ? "block" : "none")};
  text-align: center;
  font-size: 32px;
  max-width: 800px;
  color: #5a6774;
`  