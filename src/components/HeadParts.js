import React from "react";
import styled, { css } from "styled-components";

export const Skull = styled.div`
  color: darkslategrey;
  font-size: 48px;
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "80px"};
  background-color: gainsboro;
  box-shadow: inset 3px 3px 0px antiquewhite;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  :before {
    content: "✖︎ ︎✖︎︎︎";
  }
`;

export const Tooth = styled.div`
  width: 25px;
  height: 20px;
  background-color: antiquewhite;
  box-shadow: inset -3px -3px 0px gainsboro;
  ${props =>
    props.top
      ? css`
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        `
      : css`
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        `}
`;

export const Jaw = styled.div`
  color: darkslategrey;
  font-size: 48px;
  width: 100px;
  height: 20px;
  background-color: gainsboro;
  box-shadow: inset 3px 3px 0px antiquewhite;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeadTop = () => {
  return (
    <div className="talking">
      <Skull />
      <Row>
        <Tooth top={true} />
        <Tooth top={true} />
        <Tooth top={true} />
        <Tooth top={true} />
      </Row>
    </div>
  );
};

export const HeadBottom = () => {
  return (
    <>
      <Row>
        <Tooth />
        <Tooth />
        <Tooth />
        <Tooth />
      </Row>
      <Jaw />
    </>
  );
};
