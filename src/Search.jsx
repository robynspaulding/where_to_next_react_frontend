import axios from "axios";
import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";

export function Search() {
  const [results, setResults] = useState([]);

  const handleIndexSearch = (params) => {
    for (const pair of params.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    axios.post("http://localhost:3000/search.json", params).then((response) => {
      console.log(response.data);
      console.log(response.data.local_results.places);
      setResults(response.data.local_results.places);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleIndexSearch(params);
  };

  return (
    <div id="search" className="card-search">
      <h5>Use this search bar see the top three results in your area:</h5>
      <form onSubmit={handleSubmit}>
        <div class="card-body-place">
          <div>
            Search: <input type="text" name="q" />
          </div>
          <div>
            Location: <input type="text" name="location" />
          </div>
          <p></p>
          <div className="d-grid gap-2">
            <Button variant="outline-primary" size="md" type="submit">
              Search
            </Button>
          </div>
        </div>
      </form>
      <div>
        {results.map((result) => (
          <div key={result.title}>
            <h5>Name: {result.title}</h5>
            <p>Address: {result.address}</p>
            <p>Hours: {result.hours}</p>
            <p>Description: {result.description}</p>
            <p>Rating: {result.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
