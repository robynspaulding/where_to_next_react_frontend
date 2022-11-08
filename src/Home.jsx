import { useState, useEffect } from "react";
import axios from "axios";
import { TripsIndex } from "./TripsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  const [trips, setTrips] = useState([]);
  const handleIndexTrips = () => {
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(handleIndexTrips, []);

  return (
    <div>
      <Signup />
      <Login />
      <TripsIndex trips={trips} />
    </div>
  );
}
