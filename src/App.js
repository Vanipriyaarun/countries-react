import React,{ useState } from "react";
import "./App.css";

function App(props) {
  const [query, setQuery]=useState("");
  return (
    <div>
      <input type="text" placeholder="Search for a country..." className="search" onChange={(e)=> setQuery(e.target.value)}/>
      <div className="mainCard">
        {props.allCountry.filter((country)=>country.name.toLowerCase().includes(query) || country.capital.toLowerCase().includes(query))
        .map((country, index) => (
          <div key={index} className="infoCard">
            <img src={country.flag} className="card-img-top" alt="" />
            <h2>{country.name}</h2>
            <p><span>Population:</span> {country.population}</p>
            <p><span>Region:</span> {country.region}</p>
            <p><span>Capital</span> {country.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
