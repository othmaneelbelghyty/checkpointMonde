import React, { useState } from "react";

function darkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </div>
  );
}

export default darkMode;
