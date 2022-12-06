import React from "react";
import { useParams, Link } from "react-router-dom";
import Countries from "./countriesAll.json";
import NavBar from "./NavBar";

function CountryDetails(props) {
  const { countryName } = useParams();
  console.log(countryName);
  const country = Countries.find((country) => country.name === countryName);
  console.log(country);
  return (
    <div className={props.theme}>
      <NavBar toggleTheme={props.toggleTheme} theme={props.theme} />
      <div className="country-detail-card">
        <Link
          to="/"
          className={
            props.theme === "lightMode" ? "back-btn" : "darkModeBack-btn"
          }
        >
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </Link>
        <div className="country-detail">
          <img src={country.flag} alt="" />
          <div className="baseDetail">
            <h2>{country.name}</h2>
            <ul>
              <li>
                <strong>Native Name : </strong>
                {country.nativeName}
              </li>
              <li>
                <strong>Population : </strong>
                {country.population}
              </li>
              <li>
                <strong>Region : </strong>
                {country.region}
              </li>
              <li>
                <strong>Sub Region : </strong>
                {country.subregion}
              </li>
              <li>
                <strong>Capital : </strong>
                {country.capital}
              </li>
            </ul>
          </div>
          <div className="subDetail">
            <ul>
              <li>
                <strong>Top Level Domain : </strong>
                {country.topLevelDomain[0]}
              </li>
              <li>
                <strong>Currencies : </strong>
                {country.currencies[0].name}
              </li>
              <li>
                <strong>Languages : </strong>
                {country.languages.map((el) => el.name).join(",")}
              </li>
            </ul>
          </div>
          <div className="border">
            <strong>Border Countries : </strong>
            {country.borders.map((el, index) =>
              Countries.filter((elem) => elem.alpha3Code === el).map((el) => (
                <Link
                  to={`/${country.name}/${el.name}`}
                  className={
                    props.theme === "lightMode"
                      ? "border-btn"
                      : "darkModeBorder-btn"
                  }
                  key={index}
                >
                  {el.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
