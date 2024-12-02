import React from 'react';

const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>Max Speed: {starship.max_atmosphering_speed}</p>
    </div>
  );
};

export default StarshipCard;
