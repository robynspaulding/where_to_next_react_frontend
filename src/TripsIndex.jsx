import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "teal",
  fontSize: "1.8rem",
};

export function TripsIndex(props) {
  return (
    <div id="trips-index" className="row">
      <h1>All Trips</h1>
      {props.trips.map((trip) => (
        <div className="card-trip" style={{ width: "18rem" }} key={trip.id}>
          <img className="card-img-top" src={trip.image_url} />

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
