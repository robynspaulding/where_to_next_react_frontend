import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "teal",
  fontSize: "1.8rem",
};

export function TripsIndex(props) {
  return (
    <div id="trips-index">
      <h1>All Trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <img className="photo" src={trip.image_url} />
          <p></p>
          <Link to={`/trips/${trip.id}`}>{trip.title}</Link>
        </div>
      ))}

      <div>
        <Link to="/trips/new" style={linkStyle}>
          Add New Trip
        </Link>
      </div>
    </div>
  );
}
