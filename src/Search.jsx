import axios from "axios";
import { useState } from "react";
import React from "react";

export function Search() {
  const [results, setResults] = useState([]);

  const handleIndexSearch = (params) => {
    for (const pair of params.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    axios.post("http://localhost:3000/search.json", params).then((response) => {
      console.log(response.data);
      setResults(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleIndexSearch(params);
    event.target.reset;
  };

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
    </div>
  );
}
