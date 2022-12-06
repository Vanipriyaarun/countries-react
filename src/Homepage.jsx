import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import RegionFilter from "./RegionFilter";
import NavBar from "./NavBar";

const regions = [
  "Filter by Region",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Polar",
];

function Home(props) {
  const [query, setQuery] = useState("");
  const [filteredCountry, setFilteredCountry] = useState(props.allCountry);

  function handleChange(e) {
    e.target.value === "Filter by Region"
      ? setFilteredCountry(props.allCountry)
      : setFilteredCountry(
          props.allCountry.filter(
            (country) => country.region === e.target.value
          )
        );
  }
  return (
    <div className={props.theme}>
      <NavBar toggleTheme={props.toggleTheme} theme={props.theme} />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country..."
          className={props.theme === "lightMode" ? "search" : "darkModeSearch"}
          onChange={(e) => setQuery(e.target.value)}
        />
        <RegionFilter
          regions={regions}
          handleChange={handleChange}
          theme={props.theme}
        />
      </div>
      <div className="mainCard">
        {filteredCountry
          .filter(
            (country) =>
              country.name.toLowerCase().includes(query)
              || country.capital.toLowerCase().includes(query)
          )
          .map((country, index) => (
            <div key={index} className="infoCard">
              <img src={country.flag} className="card-img-top" alt="" />
              <h2>{country.name}</h2>
              <p>
                <span>Population:</span> {country.population}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Capital</span> {country.capital}
              </p>
              <Link
                className={
                  props.theme === "lightMode"
                    ? "moreDetails"
                    : "darkModeMoreDetails"
                }
                to={`/${country.name}`}
              >
                More details
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
