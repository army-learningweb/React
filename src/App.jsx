import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Component

function Welcome() {
  return (<h1>Xin chào bạn - tôi là component Welcome</h1>);
}

function App() {
  return (
    <>
      <Welcome />
    </>
  );
}

export default App;
