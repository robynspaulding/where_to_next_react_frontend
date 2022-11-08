import axios from "axios";

export function TripsNew() {
  const handleCreateTrip = (params) => {
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      const newTrip = response.data;
      console.log("New trip added!", newTrip);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateTrip(params);
    event.target.reset;
  };

  return (
    <div id="trip-new">
      <h1>Add a New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Image: <input type="text" name="image_url" />
        </div>
        <div>
          State Date: <input type="text" name="start_date" />
        </div>
        <div>
          End Date: <input type="text" name="end_date" />
        </div>
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
}
