import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Homepage";
import Countries from "./countriesAll.json";
import CountryDetails from "./CountryDetails";
import BorderCountry from "./BorderCountry";

function App() {
  const [theme, setTheme] = useState("lightMode");
  function toggleTheme() {
    setTheme(theme === "lightMode" ? "darkMode" : "lightMode");
  }
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                allCountry={Countries}
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          />
          <Route
            path="/:countryName"
            element={<CountryDetails toggleTheme={toggleTheme} theme={theme} />}
          />
          <Route
            path="/:countryName/:countryName"
            element={<BorderCountry theme={theme} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
