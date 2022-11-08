export function TripsShow(props) {
  return (
    <div id="trip-show">
      <h1>Trip Info</h1>
      <p>{props.trip.title}</p>
      <img src={props.trip.image_url} />
      <p>{props.trip.start_time}</p>
      <p>{props.trip.end_time}</p>
    </div>
  );
}
