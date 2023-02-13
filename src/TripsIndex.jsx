import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import moment from "moment";

export function TripsIndex(props) {
  return (
    <div id="trips-index" className="row justify-content-center">
      <Row xs={1} md={3} className="g-4">
        {props.trips.map((trip) => (
          <Col>
            <Card key={trip.id} style={{ width: "25rem" }}>
              <Card.Img variant="top" src={trip.image_url} />
              <Card.Body>
                <Card.Title>{trip.title}</Card.Title>
                <Card.Text>
                  {moment(trip.start_time).format("LL")} - {moment(trip.end_time).format("LL")}
                </Card.Text>
                <div className="d-grid gap-2">
                  <Link to={`/trips/${trip.id}`}>
                    {" "}
                    <Button>View Places to Visit in {trip.title}</Button>
                  </Link>
                </div>
                <p></p>
                <div>
                  <Button variant="outline-primary" size="sm" onClick={() => props.onSelectUpdateTrip(trip)}>
                    Update Trip Info
                  </Button>
                  <p></p>
                  <Button
                    className="justify-content-end"
                    variant="outline-danger"
                    size="sm"
                    onClick={() => props.onDestroyTrip(trip)}
                  >
                    Delete Trip
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
