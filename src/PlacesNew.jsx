import axios from "axios";
import { useParams } from "react-router-dom";

export function PlacesNew() {
  const handleCreatePlace = (params) => {
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      const newPlace = response.data;
      console.log("created new place", newPlace);
      // window.location.href = "/"
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create Place");
    const params = new FormData(event.target);
    handleCreatePlace(params);
    event.target.reset;
  };
  return (
    <div id="place=new">
      <h1>Add a new place to visit on your trip:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Trip id: <input type="text" name="trip_id" />
        </div>
        <div>
          Name of Place: <input type="text" name="name" />
        </div>
        <div>
          Address: <input type="text" name="address" />
        </div>
        <div>
          Description: <input type="text" name="description" />
        </div>
        <div>
          Start date/time: <input type="text" name="start_time" />
        </div>
        <div>
          End date/time: <input type="text" name="end_time" />
        </div>
        <button type="submit">Add Place to Trip</button>
      </form>
    </div>
  );
}
