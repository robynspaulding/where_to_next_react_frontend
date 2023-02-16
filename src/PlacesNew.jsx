import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
export function PlacesNew(props) {
  const handleCreatePlace = (params) => {
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      const newPlace = response.data;
      console.log("created new place", newPlace);
      window.location.href = "/trips/" + props.tripId;
    });
    console.log(params);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create Place");
    const params = new FormData(event.target);
    params.append("trip_id", props.tripId);
    console.log(params);
    handleCreatePlace(params);
    event.target.reset;
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="card-place-new" id="place-new">
      <h5>Add a new place to visit on your trip:</h5>
      <form onSubmit={handleSubmit}>
        <div class="card-body-place">
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
            Image_url:
            <input type="text" name="image_url" />
          </div>
          <div>
            Start date:{" "}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              value={startDate}
              name="start_time"
            />
          </div>
          <div>
            End date{" "}
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} value={endDate} name="end_time" />
          </div>
          <p></p>
          <div className="d-grid gap-2">
            <Button variant="outline-success" size="md" type="submit">
              Add Place to Trip
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
