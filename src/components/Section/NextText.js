import React from "react";

import {
  Container,
  TextWrapper,
  TextH1,
  TextNo,
  TextElt,
    Button,
    TextP
} from "./NextTextElements";

const NextText = ({ On,text,paragraph } ) => {
  return (
    <Container On={On}>
      <TextWrapper>
        <TextH1>
          {text}
              </TextH1>
              <TextP On={On}>{ paragraph }</TextP>
        <TextNo On={On}>
          <TextElt>11 million +</TextElt>
          <TextElt>7 million +</TextElt>
          <TextElt>13 billion +</TextElt>
        </TextNo>
        <Button On={On}>Get Started</Button>
      </TextWrapper>
    </Container>
  );
};

export default NextText;
