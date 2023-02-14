import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlacesNew } from "./PlacesNew";
import { Search } from "./Search";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function TripsShow() {
  const params = useParams();
  console.log(params);
  const [trip, setTrip] = useState({});

  const handleShowTripPlaces = () => {
    axios.get("http://localhost:3000/trips/" + params.id + ".json").then((response) => {
      console.log(response.data);
      setTrip(response.data);
    });
  };

  useEffect(handleShowTripPlaces, []);

  return (
    <div id="trip-show" className="row justify-content-center">
      <h1>Trip Info</h1>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={trip.image_url} />
        <Card.Body>
          <Card.Title>{trip.title}</Card.Title>
          {/* {trip.id} */}
          <Card.Text>
            {moment(trip.start_time).format("LL")} - {moment(trip.end_time).format("LL")}
          </Card.Text>
        </Card.Body>
      </Card>
      <h1>Places to Visit</h1>
      <Row xs={1} md={2} className="g-4">
        {trip.places?.map((place) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={place.image_url} />
              <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text>
                  {/* <p>{place.id}</p> */}
                  address: {place.address}
                  <p></p>
                  date: {moment(place.start_time).format("LL")} - {moment(place.end_time).format("LL")}
                  <p></p>
                  {place.description}
                  <p></p>
                </Card.Text>
                <div>!update and delete are in progress!</div>

                <Button
                  variant="outline-primary"
                  size="sm"
                  // onClick={() => }
                >
                  Update Place Info
                </Button>
                <p></p>
                <Button
                  className="justify-content-end"
                  variant="outline-danger"
                  size="sm"
                  // onClick={() => }
                >
                  Delete Place
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <p></p>
      <p></p>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Text>
            <PlacesNew tripId={trip.id} />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Text>
            <Search />
          </Card.Text>
        </Card.Body>
      </Card>
      <p></p>
      <p></p>
    </div>
  );
}
