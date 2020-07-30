import React from "react";
import DigitalClock from "./components/organisms/DigitalClock/DigitalClock";
import StopWatch from "./components/organisms/StopWatch/StopWatch";

function App() {
  return (
    <div>
      <div style={{ float: "left", marginTop: 39 }}>
        <DigitalClock />
      </div>
      <div style={{ float: "left", marginLeft: 39 }}>
        <StopWatch />
      </div>
    </div>
  );
}

export default App;
