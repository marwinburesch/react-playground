import React from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [settings, setSettings] = React.useState({
    darkmode: false
  });

  function handleToggleDarkmode(value) {
    setSettings({
      darkmode: value
    });
  }

  return (
    <div className="App">
      <ToggleSwitch settings={settings} toggleDarkmode={handleToggleDarkmode} />
    </div>
  );
}

export default App;
