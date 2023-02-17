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
import { Modal } from "./Modal";
import { UpdatePlace } from "./UpdatePlace";

export function TripsShow() {
  const [isPlaceUpdateVisable, setIsPlaceUpdateVisable] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({});

  const handleShowPlace = (place) => {
    setIsPlaceUpdateVisable(true);
    setCurrentPlace(place);
  };

  const handleHideUpdatedPlace = () => {
    setIsPlaceUpdateVisable(false);
  };

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

  const handleUpdatePlace = (placeId, params) => {
    axios.patch(`http://localhost:3000/places/${placeId}.json`, params).then((response) => {
      console.log(response.data);
      const places = trip.places.map((place) => {
        if (place.id === placeId) {
          return response.data;
        } else {
          return place;
        }
      });
      let updatedTrip = { ...trip };
      updatedTrip.places = places;
      setTrip(updatedTrip);
      console.log(trip);
      setIsPlaceUpdateVisable(false);
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
        {trip.places.map((place) =>
          place ? (
            <Col key={place.id}>
              <Card>
                <Card.Img variant="top" src={place?.image_url} />
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
                  <Button variant="outline-success" size="sm" onClick={() => handleShowPlace(place)}>
                    Update Place
                  </Button>
                  <Modal show={isPlaceUpdateVisable} onClose={handleHideUpdatedPlace}>
                    <UpdatePlace place={currentPlace} onUpdatePlace={handleUpdatePlace} />
                  </Modal>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            <></>
          )
        )}
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
