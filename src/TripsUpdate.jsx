import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export function TripsUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTrip(props.trip.id, params);
    event.target.reset();
    window.location.href = "/";
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>Update Trip Info</Card.Header>
        <form onSubmit={handleSubmit}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {" "}
              Name of Trip: <input type="text" name="title" defaultValue={props.trip.title} />
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              Image: <input type="text" name="image_url" defaultValue={props.trip.image_url} />
            </ListGroup.Item>
            <ListGroup.Item>
              Start Date:
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                value={startDate}
                name="start_time"
              />
            </ListGroup.Item>
            <ListGroup.Item>
              End Date:
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} value={endDate} name="end_time" />
            </ListGroup.Item>
          </ListGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" size="md" type="submit">
              Update Trip
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
