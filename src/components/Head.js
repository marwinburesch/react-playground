import React from "react";
import { HeadTop, HeadBottom } from "./HeadParts";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const HeadTalk = keyframes`
    0% {
      height: 0px;
    }
    50% {
      height: 20px;
    }
    100% {
      height: 0px;
    }
  `;

const Talk = styled.div`
  height: 0px;
  animation: ${HeadTalk} 1s ease infinite;
`;

const Head = () => {
  return (
    <Container>
      <HeadTop />
      <Talk />
      <HeadBottom />
    </Container>
  );
};

export default Head;
