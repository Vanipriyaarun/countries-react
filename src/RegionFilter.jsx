import React from "react";

function RegionFilter(props) {
  return (
    <div className="select-menu">
      <select
        onChange={(e) => props.handleChange(e)}
        name="Filtered by Region"
        className={
          props.theme === "lightMode" ? "SelectMenu" : "darkModeSelectMenu"
        }
      >
        {props.regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RegionFilter;
