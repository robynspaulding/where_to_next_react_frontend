import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export function UpdatePlace(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePlace(props.place.id, params);
    event.target.reset();
    window.location.href = "/";
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>Update Place Info</Card.Header>
        <form onSubmit={handleSubmit}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {" "}
              Update Name: <input type="text" name="name" />
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              Image: <input type="text" name="image_url" />
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              Address: <input type="text" name="address" />
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              Description: <input type="text" name="description" />
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
            <Button variant="success" size="md" type="submit">
              Update Trip
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
