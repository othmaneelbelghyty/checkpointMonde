import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </header>
  );
};

export default Header;
