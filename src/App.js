import React from "react";
import "./App.css";

function App(props) {
  return (
    <div className="mainCard">
      {props.allCountry.map((country, index) => (
        <div key={index} className="infoCard">
          <img src={country.flag} className="card-img-top" alt="" />
          <h2>{country.name}</h2>
          <p><span>Population:</span> {country.population}</p>
          <p><span>Region:</span> {country.region}</p>
          <p><span>Capital</span> {country.capital}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
