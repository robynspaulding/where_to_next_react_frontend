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
  const [trip, setTrip] = useState({ places: [] });

  const handleShowTripPlaces = () => {
    axios.get("http://localhost:3000/trips/" + params.id + ".json").then((response) => {
      console.log(response.data);
      setTrip(response.data);
    });
  };

  const handleDeletePlace = (placeId) => {
    setTrip({ ...trip, places: trip.places.filter((p) => p.id !== placeId) });
    axios
      .delete(`http://localhost:3000/places/${placeId}.json`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setTrip({ ...trip });
      });
  };

  useEffect(handleShowTripPlaces, []);

  return (
    <div key={trip.id} id="trip-show" className="row justify-content-center">
      <h1>Trip Info</h1>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={trip.image_url} />
        <Card.Body>
          <Card.Title>{trip.title}</Card.Title>
          <Card.Text>
            {moment(trip.start_time).format("LL")} - {moment(trip.end_time).format("LL")}
          </Card.Text>
        </Card.Body>
      </Card>
      <h1>Places to Visit</h1>
      <Row xs={1} md={3} className="g-4">
        {trip.places.map((place) => (
          <Col key={place.id}>
            <Card>
              <Card.Img variant="top" src={place.image_url} />
              <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text>
                  address: {place.address}
                  <p></p>
                  date: {moment(place.start_time).format("LL")} - {moment(place.end_time).format("LL")}
                  <p></p>
                  {place.description}
                  <p></p>
                </Card.Text>

                <Button variant="outline-danger" size="sm" onClick={() => handleDeletePlace(place.id)}>
                  Delete Place
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

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
    </div>
  );
}
