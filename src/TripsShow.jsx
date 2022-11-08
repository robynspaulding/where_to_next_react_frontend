import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function TripsShow() {
  const params = useParams();
  console.log(params);
  const [trip, setTrip] = useState({});

  const handleShowTrip = () => {
    axios.get("http://localhost:3000/trips/" + params.id + ".json").then((response) => {
      console.log(response.data);
      setTrip(response.data);
    });
  };
  useEffect(handleShowTrip, []);
  return (
    <div id="trip-show">
      <h1>Trip Info</h1>
      <p>{trip.title}</p>
      <img src={trip.image_url} />
      <p>{trip.start_time}</p>
      <p>{trip.end_time}</p>
    </div>
  );
}
