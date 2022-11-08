export function TripsShow(props) {
  return (
    <div id="trip-show">
      <h1>Trip Info</h1>
      <p>{props.trip.title}</p>
    </div>
  );
}
