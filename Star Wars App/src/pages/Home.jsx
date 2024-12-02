import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadMoreButton from "../components/LoadMoreButton";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/");
        if (!response.ok) throw new Error("Something went wrong!");
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (loading) return <p>Loading starships...</p>;
  if (error) return <p>Error: {error}</p>;

  // Arama fonksiyonu
  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  // Arama sonuçlarına göre filtreleme
  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    starship.model.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <h1 className="title">Name/Model</h1>
      <SearchBar onSearch={handleSearch}/>
      <ul className="starship-list">
  {filteredStarships.map((starship, index) => (
    <li key={index} className="starship-card">
      <Link to={`/starship/${index + 1}`} className="starship-link">
        <div className="starship-card-content">
          <h2 className="starship-title">{starship.name}</h2>
          <p className="starship-info">Model: {starship.model}</p>
          <p className="starship-info">Speed: {starship.max_atmosphering_speed}</p>
        </div>
      </Link>
    </li>
  ))}
</ul>

      <LoadMoreButton />
    </div>
  );
};

export default Home;
