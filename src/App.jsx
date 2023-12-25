import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import RegionFilter from "./RegionFilter";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  const [myCountry, setMyCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMyCountry(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredCountries = myCountry.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (regionFilter === "All" ||
        country.region.toLowerCase().includes(regionFilter.toLowerCase()))
  );

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <button onClick={toggleDarkMode}>Dark Mode</button>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div className="grid-rows-subgrid">
            <input
              type="text"
              placeholder="Search a country..."
              className="form-input mt-4 mb-6 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <RegionFilter
              selectedRegion={regionFilter}
              onRegionChange={(e) => setRegionFilter(e.target.value)}
            />
            <CardList count={filteredCountries} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
