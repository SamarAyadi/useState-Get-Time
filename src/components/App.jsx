import React, { useState } from "react";

function App() {
  setInterval(handleTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function handleTime() {
    const timeNow = new Date().toLocaleTimeString();
    setTime(timeNow);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={handleTime}>Get Time</button>
    </div>
  );
}
export default App;
