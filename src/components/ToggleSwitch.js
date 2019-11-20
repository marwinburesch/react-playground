import React from "react";
import styled from "styled-components";

// source: https://codesandbox.io/s/6v7n1vr8yn

export const ToggleSwitchName = styled.span`
  color: #fff;
  flex-grow: 1;
  user-select: none;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  width: 42px;
  height: 26px;
  margin-right: 15px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 0px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::before {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const ToggleSwitch = ({ id, active, onChangeSetting }) => {
  const [isChecked, setIsChecked] = React.useState(active);

  function handleChange() {
    setIsChecked(!isChecked);
    onChangeSetting(id, isChecked);
  }

  return (
    <CheckBoxWrapper>
      <CheckBox
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <CheckBoxLabel htmlFor={id}></CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

export default ToggleSwitch;
