import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThenContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleCLick = () => {
    setDarkMode(!darkMode);
  };

  const color = useContext(ThemeContext);

  return (
    <>
      <h1 style={{ color }}>React Hooks</h1>
      <button type="button" onClick={handleCLick}>
        {darkMode ? "DarkMode" : "lightMode"}
      </button>
    </>
  );
};

export default Header;
