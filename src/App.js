import React from "react";
import styled from "styled-components";
import SettingsBox from "./components/SettingsBox";
import Head from "./components/Head";

// https://coolors.co/282c34-4fbe79-39a2ae-434f4f-7a9e9f

const Playground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #282c34;
`;

const TheGrid = styled.div`
  height: fit-content;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
`;

function App() {
  const [settings, setSettings] = React.useState({
    darkmode: false,
    sound: true,
    skull: false,
    settings: true
  });

  console.log(`The current settings are:`, settings);

  function saveSettings(newSettings) {
    setSettings(newSettings);
  }

  return (
    <Playground>
      <TheGrid>
        {settings.settings && (
          <SettingsBox settings={settings} saveSettings={saveSettings} />
        )}
        {settings.skull && <Head></Head>}
      </TheGrid>
    </Playground>
  );
}

export default App;
