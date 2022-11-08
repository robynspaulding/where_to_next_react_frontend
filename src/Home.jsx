import { useState, useEffect } from "react";
import axios from "axios";
import { TripsIndex } from "./TripsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { TripsShow } from "./TripsShow";
import { Modal } from "./Modal";

export function Home() {
  const [trips, setTrips] = useState([]);
  const [isTripShowVisable, setIsTripShowVisable] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

  const handleIndexTrips = () => {
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleShowTrip = (trip) => {
    setIsTripShowVisable(true);
    setCurrentTrip(trip);
  };

  const handleHideTrip = () => {
    setIsTripShowVisable(false);
  };

  useEffect(handleIndexTrips, []);

  return (
    <div>
      <Signup />
      <Login />
      <TripsIndex trips={trips} onSelectTrip={handleShowTrip} />
      <Modal show={isTripShowVisable} onClose={handleHideTrip}>
        <TripsShow trip={currentTrip} />
      </Modal>
    </div>
  );
}
