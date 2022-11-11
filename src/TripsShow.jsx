import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlacesNew } from "./PlacesNew";
import { Search } from "./Search";

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
                Dates/times: {trip.start_time}-{trip.end_time}
                <div>
                  <div>
                    <img className="card-image-top" src={trip.image_url} />
                  </div>
                  {trip.places?.map((place) => (
                    <div className="card" style={{ width: "10rem;" }} key={place.id}>
                      <p className="card-title"> Place: {place.name} </p>
                      <p className="card-text"> Address: {place.address} </p>
                      <p className="card-body"> Description: {place.description} </p>
                      <p className="card-body">
                        {" "}
                        Dates/Times: {place.start_time} - {place.end_time}{" "}
                      </p>
                      <button className="btn btn-info">Does something</button>
                    </div>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <PlacesNew tripId={trip.id} />
      <Search />
    </div>
  );
}
