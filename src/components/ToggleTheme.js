import { useState } from "react";
import React from 'react'
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <section className="toggle" onClick={changeTheme}>
      {darkMode ? (
        <section className="toggle-light">
          <LightModeIcon fontSize="large" />
        </section>
      ) : (
        <section className="toggle-dark">
          <DarkModeIcon fontSize="large" />
        </section>
      )}
    </section>
  );
}

export default ToggleTheme
