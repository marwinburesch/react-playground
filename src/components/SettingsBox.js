import React from "react";
import ToggleSwitch, { ToggleSwitchName } from "./ToggleSwitch";
import styled from "styled-components";

const ModuleTitle = styled.h3`
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SettingsBoxWrapper = styled.div`
  width: 175px;
  height: fit-content;
  padding: 0px 10px 10px 10px;
  background-color: transparent;
  border: solid 5px #fff;
  border-radius: 15px;
`;

const ToggleSwitchWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;

const SettingsBox = ({ settings, onChangeSetting }) => {
  return (
    <SettingsBoxWrapper>
      <ModuleTitle>Settings:</ModuleTitle>
      {Object.keys(settings).map(setting => (
        <ToggleSwitchWrapper key={setting}>
          <ToggleSwitch
            id={setting}
            active={settings[setting]}
            onChange={onChangeSetting}
          />
          <ToggleSwitchName>{setting}</ToggleSwitchName>
        </ToggleSwitchWrapper>
      ))}
    </SettingsBoxWrapper>
  );
};

export default SettingsBox;
