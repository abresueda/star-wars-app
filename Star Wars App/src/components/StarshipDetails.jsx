import React from 'react';

const StarshipDetails = ({ starship }) => {
  return (
    <div className="starship-details">
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Max Speed: {starship.max_atmosphering_speed}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Crew: {starship.crew}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
    </div>
  );
};

export default StarshipDetails;
