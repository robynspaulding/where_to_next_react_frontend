import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export function TripsNew() {
  const handleCreateTrip = (params) => {
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      const newTrip = response.data;
      console.log("New trip added!", newTrip);
      window.location.href = "/";
    });
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateTrip(params);
    event.target.reset;
  };

  return (
    <div id="trip-new">
      <Card border="success" style={{ width: "18rem" }}>
        <form onSubmit={handleSubmit}>
          <Card.Header>Add a New Trip</Card.Header>
          <Card.Body>
            <Card.Text>
              {" "}
              Title: <input type="text" name="title" />
            </Card.Text>
            <Card.Text>
              Image: <input type="text" name="image_url" />
            </Card.Text>
            <Card.Text>
              Start date:
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                value={startDate}
                name="start_time"
              />
            </Card.Text>
            <Card.Text>
              End date:
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} value={endDate} name="end_time" />
            </Card.Text>
            <Button variant="success" size="md" type="submit">
              Add Trip
            </Button>
          </Card.Body>
        </form>
      </Card>
    </div>
  );
}
