import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
const Card = ({ country }) => {
  const { name, capital, population, flags } = country;

  return (
    
      <div className="country-card bg-white rounded-lg shadow-md p-4 mb-4">
        <img
          src={flags.png}
          alt={`${name.common} flag`}
          className="w-20 h-12"
        />
        <h2 className="text-xl font-semibold mb-2">{name.common}</h2>
        <p className="text-gray-600">Capital: {capital && capital[0]}</p>
        <p className="text-gray-600">
          Population: {population && population.toLocaleString()}
        </p>
      </div>
    
  );
};

export default Card;
