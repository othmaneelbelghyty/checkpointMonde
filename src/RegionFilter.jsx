import React from "react";
import "./App.css";

const RegionFilter = ({ selectedRegion, onRegionChange }) => {
  const regions = ["Africa", "Oceania", "Europe", "Asia", "Americas", "All"];

  return (
    <select
      value={selectedRegion}
      onChange={onRegionChange}
      className="form-select mt-4 mb-6 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionFilter;
