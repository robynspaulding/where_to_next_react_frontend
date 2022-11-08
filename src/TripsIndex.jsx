export function TripsIndex(props) {
  return (
    <div id="trips-index">
      <h1>All Trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <p>{trip.title}</p>
          <button onClick={() => props.onSelectTrip(trip)}>More info</button>
        </div>
      ))}
    </div>
  );
}
