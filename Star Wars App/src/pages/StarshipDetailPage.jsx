import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const StarshipDetailPage = () => {
  const { id } = useParams(); // URL'den gelen `id` parametresini alır
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarshipDetail = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
        if (!response.ok) throw new Error("Starship not found!");
        const data = await response.json();
        setStarship(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarshipDetail();
  }, [id]);

  if (loading) return <p>Loading starship details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Max Speed: {starship.max_atmosphering_speed}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Crew: {starship.crew}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default StarshipDetailPage;
