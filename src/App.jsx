// React
import { useState } from "react";

// SVG
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Component
import { UserProfile } from "./components/UserProfile";
import {Welcome} from "./components/Welcome";

// App
function App() {
  return (
    <>
      <UserProfile/>
    </>
  );
}

export default App;
