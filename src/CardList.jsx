import React from "react";
import Card from "./Card";
// import "tailwindcss/tailwind.css";
import "./App.css";

function CardList({ count }) {
  return (
    <div className="grid-rows-subgrid">
      {count.map((country) => (
        <Card key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CardList;
