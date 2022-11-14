import axios from "axios";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

export function TripsNew() {
  const handleCreateTrip = (params) => {
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      const newTrip = response.data;
      console.log("New trip added!", newTrip);
      window.location.href = "/";
    });
  };

  const [start, onChangeStart] = useState(new Date());
  const [end, onChangeEnd] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateTrip(params);
    event.target.reset;
  };

  return (
    <div id="trip-new">
      <form onSubmit={handleSubmit}>
        <div className="card-body-new">
          <h5>Add a New Trip</h5>
          <div>
            Title: <input type="text" name="title" />
          </div>
          <div>
            Image: <input type="text" name="image_url" />
          </div>
          <div>
            Start date/time: <DateTimePicker onChange={onChangeStart} value={start} name="start_time" />
          </div>
          <div>
            End date/time: <DateTimePicker onChange={onChangeEnd} value={end} name="end_time" />
          </div>
          <button className="btn btn-outline-dark" type="submit">
            Add Trip
          </button>
        </div>
      </form>
    </div>
  );
}
