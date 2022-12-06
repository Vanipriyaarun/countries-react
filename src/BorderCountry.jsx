import React from "react";
import CountryDetails from "./CountryDetails";

function BorderCountry(props) {
  return (
    <div className={props.theme}>
      <CountryDetails toggleTheme={props.toggleTheme} theme={props.theme} />
    </div>
  );
}

export default BorderCountry;
