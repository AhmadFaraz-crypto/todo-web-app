/**
 * WebLocation
 *
 */

import React from "react";

import Location from "../../assets/location.png";

// style
import Wrapper from "./style";

//constants
const locationData = [
  {
    name: "Pustegränd, Stockholm, SE",
    area: "59.3293° N, 18.0686° E",
  },
  {
    name: "Pustegränd, Stockholm, SE",
    area: "59.3293° N, 18.0686° E",
  },
  {
    name: "Pustegränd, Stockholm, SE",
    area: "59.3293° N, 18.0686° E",
  },
  {
    name: "Pustegränd, Stockholm, SE",
    area: "59.3293° N, 18.0686° E",
  },
];

const WebLocation = () => {
  return (
    <Wrapper>
      <p className="add-new-task">+ Check In</p>
      <p className="pt-3 pl-2 add-new-task">Current Location</p>
      <div className="d-flex">
        <img src={Location} alt="location" width="24" height="23" />
        <p className="mb-0 submit-resume">Pustegränd, Stockholm, SE</p>
      </div>
      <p className="area">59.3293° N, 18.0686° E</p>
      <p className="pt-3 pl-2 add-new-task">Previous Location</p>
      {locationData.map((e, index) => (
        <>
          <div key={index} className="d-flex">
            <img src={Location} alt="location" width="24" height="23" />
            <p className="mb-0 submit-resume">{e.name}</p>
          </div>
          <p className="area">{e.area}</p>
        </>
      ))}
    </Wrapper>
  );
};

export default WebLocation;
