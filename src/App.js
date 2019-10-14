import React from "react";
import "./App.css";
import Head from "./components/Head";
import styled from "styled-components";
import Button from "./components/Button";

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Grid>
        <Head />
        <Head />
        <Head />
        <Head />
      </Grid>
      {/* <Button size={"large"} /> */}
    </div>
  );
}

export default App;
