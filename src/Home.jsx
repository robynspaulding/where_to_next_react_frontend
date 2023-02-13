import { useState, useEffect } from "react";
import axios from "axios";
import { TripsIndex } from "./TripsIndex";
import { TripsShow } from "./TripsShow";
import { Modal } from "./Modal";
import { TripsUpdate } from "./TripsUpdate";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Home() {
  const [trips, setTrips] = useState([]);
  const [isTripShowVisable, setIsTripShowVisable] = useState(false);
  const [isTripUpdateVisable, setIsTripUpdateVisable] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

  const handleIndexTrips = () => {
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleShowTripPlaces = (trip) => {
    // setIsTripShowVisable(true);
    setCurrentTrip(trip);
  };

  const handleHideTrip = () => {
    setIsTripShowVisable(false);
  };
  //____________________________

  //Update Trip
  const handleShowUpdateTrip = (trip) => {
    setIsTripUpdateVisable(true);
    setCurrentTrip(trip);
  };

  const handleHideTripUpdate = () => {
    setIsTripUpdateVisable(false);
  };

  const handleUpdateTrip = (id, params) => {
    axios.patch("http://localhost:3000/trips/" + id + ".json", params).then((response) => {
      const updatedTrip = response.data;
      setCurrentTrip(updatedTrip);

      setTrips(
        trips.map((trip) => {
          if (trip.id === updatedTrip.id) {
            return updatedTrip;
          } else {
            return trip;
          }
        })
      );
    });
  };
  //____________________________
  //Delete Trip
  const handleDestroyTrip = (trip) => {
    axios.delete("http://localhost:3000/trips/" + trip.id + ".json").then((response) => {
      setTrips(trips.filter((t) => t.id !== trip.id));
      handleHideTrip();
    });
  };
  //____________________________

  useEffect(handleIndexTrips, []);

  return (
    <div>
      {localStorage.jwt === undefined ? (
        <>
          {" "}
          <Login />
          <Signup />
        </>
      ) : (
        <>
          <TripsIndex
            trips={trips}
            onSelectTrip={handleShowTripPlaces}
            onSelectUpdateTrip={handleShowUpdateTrip}
            trip={currentTrip}
            onDestroyTrip={handleDestroyTrip}
          />
          <Modal show={isTripShowVisable} onClose={handleHideTrip}>
            <TripsShow trip={currentTrip} />
          </Modal>
          <Modal show={isTripUpdateVisable} onClose={handleHideTripUpdate}>
            <TripsUpdate trip={currentTrip} onUpdateTrip={handleUpdateTrip} />
          </Modal>
        </>
      )}
    </div>
  );
}
