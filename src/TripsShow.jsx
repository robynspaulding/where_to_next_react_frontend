import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlacesNew } from "./PlacesNew";
import { Search } from "./Search";
import { formatInTimeZone } from "date-fns-tz";
import { Modal } from "./Modal";
import { UpdatePlace } from "./UpdatePlace";

export function TripsShow() {
  const params = useParams();
  console.log(params);
  const [trip, setTrip] = useState({});

  const handleShowTrip = () => {
    axios.get("http://localhost:3000/trips/" + params.id + ".json").then((response) => {
      console.log(response.data);
      setTrip(response.data);
    });
  };
  const formatTime = (time) => {
    if (time) {
      return formatInTimeZone(new Date(time), "America/New_York", "MM-dd-yyyy H:mm zzz");
    } else {
      return null;
    }
  };
  const [show, setShow] = useState(false);

  useEffect(handleShowTrip, []);

  return (
    <div id="trip-show" className="row justify-content-center">
      <h1>Trip Info</h1>
      <div class="row justify-content-center">
        <div class="col-sm-6 justify-content-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{trip.title}</h5>
              <p class="card-text">
                Dates/times: {formatTime(trip.start_time)}-{formatTime(trip.end_time)}
                <div>
                  <div>
                    <img className="card-image-top" src={trip.image_url} />
                  </div>
                  {trip.places?.map((place) => (
                    <div className="card" style={{ width: "10rem;" }} key={place.id}>
                      <div className="card-body">
                        <p> Visiting: {place.name} </p>
                        <p className="card-place-image">
                          <img src={place.image_url} />
                        </p>
                        <p> Address: {place.address} </p>
                        <p> Description: {place.description} </p>

                        <p>
                          Dates/Times: {formatTime(place.start_time)} - {formatTime(place.end_time)}
                        </p>
                        <button onClick={() => setShow(true)}>Update Place</button>
                        <Modal onClose={() => setShow(false)} show={show}>
                          <UpdatePlace />
                        </Modal>
                      </div>
                    </div>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      <PlacesNew tripId={trip.id} />
      <p></p>
      <p></p>
      <Search />
    </div>
  );
}
