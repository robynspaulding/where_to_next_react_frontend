import { useState, useEffect } from "react";
import axios from "axios";
import { TripsIndex } from "./TripsIndex";
import { Modal } from "./Modal";
import { TripsNew } from "./TripsNew";

export function Home() {
  const [trips, setTrips] = useState([]);

  const handleIndexTrips = () => {
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  useEffect(handleIndexTrips, []);

  return (
    <div>
      <TripsIndex trips={trips} />
    </div>
  );
}
