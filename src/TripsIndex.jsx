import { Link } from "react-router-dom";

export function TripsIndex(props) {
  return (
    <div id="trips-index">
      <h1>All Trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          {/* <p>{trip.title}</p> */}
          <Link to={`/trips/${trip.id}`}>{trip.title}</Link>
        </div>
      ))}

      <div>
        <Link to="/trips/new">Add New Trip</Link>
      </div>
    </div>
  );
}
