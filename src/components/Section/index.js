import React from "react";
import {
  ContentWrapper,
  ContentH1,
  ContentP,
  ContentButton,
  ContentContainer,
  Img,
  MainBg,
  BarContentContainer,
  BarContentWrapper,
  BarH1,
  BarH2,
  BarP,
  Column2,
  Column1,
  Link,
  TextContent,
} from "./ContentElements";
import { AiOutlineArrowRight } from "react-icons/ai";

import docker from "./doco.jpeg";
const Content = (On) => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <ContentH1>Just released: Docker Desktop 3.5</ContentH1>
        <ContentP>
          Learn about improved Volume Management, Docker Dev Environments Tech
          Preview and more in the latest release.
        </ContentP>
        <ContentButton> Learn More </ContentButton>
      </ContentWrapper>
      <BarContentContainer On={On}>
        <BarContentWrapper>
          <Column1>
            <Img src={docker} />
          </Column1>
          <Column2>
            <TextContent>
              <BarH1>WHAT'S NEW</BarH1>
              <BarH2>
                Docker Expands Trusted Content Offerings for Developers
              </BarH2>
              <BarP>
                New collaborations with AWS, Datadog, Mirantis, Red Hat, VMware
                and other industry leaders expand access to trusted application
                building blocks to more than eight million registered Docker
                developers
              </BarP>
              <Link><AiOutlineArrowRight/>Learn More!</Link>
            </TextContent>
          </Column2>
        </BarContentWrapper>
      </BarContentContainer>
    </ContentContainer>
  );
};

export default Content;

