import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

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
    event.target.reset;
  };

  // useEffect(handleIndexSearch, []);

  return (
    <div id="search">
      <p></p>
      <form onSubmit={handleSubmit}>
        <div>
          Search: <input type="text" name="q" />
        </div>
        <div>
          Location: <input type="text" name="location" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {results.map((result) => (
          <div>
            <p>{result.title}</p>
            <p>Address: {result.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
