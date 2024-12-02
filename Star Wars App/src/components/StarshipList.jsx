import React from 'react';
import StarshipCard from './StarshipCard';
import LoadMoreButton from './LoadMoreButton';

const StarshipList = ({ starships, loadMore }) => {
  return (
    <div className="starships-list">
      {starships.map((ship) => (
        <StarshipCard key={ship.name} starship={ship} />
      ))}
      <LoadMoreButton loadMore={loadMore} />
    </div>
  );
};

export default StarshipList;
