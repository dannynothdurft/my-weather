import React, { useState } from "react";

import { Location, Arrow, Cogwheel } from "../icons";
import { useSelector } from "react-redux";
import { LocationModal } from "./";

const Header = () => {
  const [locationModal, setLocationModal] = useState(false);
  const { city } = useSelector((state) => (state as any).location);

  const openLocation = () => {
    setLocationModal(!locationModal);
  };

  return (
    <header>
      <div className="ct-location">
        <Location /> <p>{city}</p>
        <span onClick={openLocation}>
          <Arrow />
        </span>
        {locationModal ? <LocationModal /> : null}
      </div>
      <Cogwheel />
    </header>
  );
};

export default Header;
