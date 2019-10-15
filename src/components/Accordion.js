import React from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  width: 100%;
  height: 40px;
`;

const AccordionTitle = styled.div`
  background-color: deeppink;
  color: #fff;
`;

const Content = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  width: 100%;
  color: white;
  background-color: rgba(60, 60, 60, 0.5);
`;

const Arrow = styled.div`
  float: right;
  transform: ${props => (props.show ? "rotate(90deg)" : "rotate(0deg)")};
  transition: all 0.2s;
`;

export default function Accordion({ title, content }) {
  const [toggleContent, setToggleContent] = React.useState(false);

  console.log(toggleContent);

  function handleClick() {
    setToggleContent(!toggleContent);
  }

  return (
    <>
      <AccordionWrapper>
        <AccordionTitle onClick={handleClick}>
          {title}
          <Arrow show={toggleContent}>▶︎</Arrow>
        </AccordionTitle>
        <Content show={toggleContent}>{content}</Content>
      </AccordionWrapper>
    </>
  );
}
