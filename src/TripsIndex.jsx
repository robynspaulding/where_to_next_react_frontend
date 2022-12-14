import { Link } from "react-router-dom";

const linkStyle = {
  // margin: "10rem",
  textDecoration: "underline",
  color: "black",
  fontSize: "1.8rem",
};

const linkStyle2 = {
  textDecoration: "underline",
  color: "black",
  fontSize: "1.5rem",
};

export function TripsIndex(props) {
  return (
    <div id="trips-index" className="row justify-content-center">
      <div>
        <Link to="/trips/new" style={linkStyle}>
          Add New Trip
        </Link>
      </div>

      <h1>My Trips</h1>
      {props.trips.map((trip) => (
        <div className="card-trip" style={{ width: "18rem" }} key={trip.id}>
          <img className="card-image-index" src={trip.image_url} />

          <Link to={`/trips/${trip.id}`} style={linkStyle2}>
            {trip.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
