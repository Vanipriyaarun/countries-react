import React from "react";

function NavBar(props) {
  return (
    <div className="navBar">
      <h2>Where in the world?</h2>
      <button
        className={props.theme === "lightMode" ? "ModeBtn" : "darkMode-Btn"}
        onClick={() => props.toggleTheme()}
      >
        {props.theme === "lightMode" ? (
          <i className="fa-regular fa-moon"></i>
        ) : (
          <i class="fa-solid fa-moon"></i>
        )}
        {props.theme === "lightMode" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default NavBar;
