import styled from "styled-components";
import { Link as Links } from "react-router-dom";

export const ContentContainer = styled.div`

  background-color: #2496ed;
  height: 800px;
  margin-top: -22px;

`;

export const Img = styled.img`
  width: 400px;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232e34;
`;

export const ContentWrapper = styled.div`
  padding: 150px;
  padding-left: 350px;
  transition: 0.5s ease-in-out;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 990px) {
    transition: 0.5s ease-in-out;
    position: static;
    padding: 100px;
    padding-right: 120px;
  }
  @media screen and (max-width: 750px) {
    position: static;
    padding: 50px;
    padding-left: 60px;
  }
`;

export const ContentH1 = styled.h1`
  color: white;
  font-size: 55px;
  max-width: 530px;
  @media screen and (max-width: 990px) {
    max-width: 580px;
  }
  @media screen and (max-width: 750px) {
    max-width: 580px;
    font-size: 40px;
  }
`;

export const ContentP = styled.p`
  position: relative;
  color: #c4f0ff;
  font-size: 1.7rem;
  max-width: 538px;
  bottom: 10px;
  @media screen and (max-width: 768px) {
    max-width: 808px;
  }
`;
export const ContentButton = styled(Links)`
  position: relative;
  right: 20px;
  top: 40px;
  text-decoration: none;
  outline: none;
  margin: 20px;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 45px;
  padding-right: 45px;
  font-weight: 600;
  background: #003f8c;
  border-radius: 5px;

  &:hover{
    background: white;
    color: #2496ed;
    transition: 0.2s ease-in-out;

  }
  @media screen and (max-width: 768px) {
  }
`;
export const MainBg = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BarContentContainer = styled.div`
z-index: 99;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  width: 1200px;
  background: white;
  border: 5px solid white;
  padding-bottom: 2px;
  padding-top: -21px;
  box-shadow: 0 15px 13px rgba(8, 28, 21, 0.2);
`;
export const BarContentWrapper = styled.div`
z-index: 99;
  margin-top: 50px;
  display: grid;
  grid-auto-columns: minmax(auto, 800px);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    height: 860px;
    margin-top: 50px;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const BarH1 = styled.h1`
  max-width: 520px;
  color: #2496ed;
  font-size: 20px;
  font-weight: 500;
`;
export const BarH2 = styled.h2`
  min-width: 600px;
  color: #0b214a;
  font-size: 25px;
  font-weight: 500;
`;
export const BarP = styled.p`
  min-width: 200px;
  color: #697a89;
  font-size: 18px;
  font-weight: 400;
`;
export const Link = styled.h1`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    color: #2496ed;
`

export const TextContent = styled.div`

`
