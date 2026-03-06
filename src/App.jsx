// React
import { useState } from "react";

// SVG
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Component
import { UserProfile } from "./components/UserProfile";
import { Welcome } from "./components/Welcome";
import { Child } from "./components/Child";

// App
function App() {
  return (
    <>
      <UserProfile name="Lưu Đức Vỹ" avatar = "Vỹ" skill = {['HTML,CSS','PHP,LARAVEL']}/>
    </>
  );
}

export default App;
