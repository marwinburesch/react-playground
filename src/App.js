import React from "react";
import styled from "styled-components";
import SettingsBox from "./components/SettingsBox";
import Head from "./components/Head";
import defaultSettings from "./settings";

const Playground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #282c34;
`;

const Grid = styled.div`
  height: fit-content;
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
  > * {
    min-height: 205px;
  }
`;

function App() {
  const [settings, setSettings] = React.useState(defaultSettings);

  function saveSettings(newSettings) {
    setSettings(newSettings);
  }

  return (
    <Playground>
      <Grid>
        {settings.settings && (
          <SettingsBox settings={settings} saveSettings={saveSettings} />
        )}
        {settings.skull && <Head></Head>}
      </Grid>
    </Playground>
  );
}

export default App;
