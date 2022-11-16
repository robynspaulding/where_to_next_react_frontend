import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

export function UpdatePlace() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
  };

  const [start, onChangeStart] = useState(new Date());
  const [end, onChangeEnd] = useState(new Date());

  return (
    <div>
      <h4>Update Place Info:</h4>
      <form onSubmit={handleSubmit}>
        <div>
          Name of Place: <input type="text" name="place" />
        </div>
        <div>
          Address: <input type="text" name="address" />
        </div>
        <div>
          Description: <input type="text" name="description" />
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
          Update
        </button>
      </form>
    </div>
  );
}
