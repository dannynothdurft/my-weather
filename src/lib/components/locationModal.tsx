import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCity } from "../redux/reducer/location";
import GEO from "../../data/geo.json";

const LocationModal = () => {
  const dispatch = useDispatch();
  const [cityValue, setCityValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityValue(event.target.value);
  };

  useEffect(() => {
    if (GEO["DE"].includes(cityValue)) {
      dispatch(incrementCity(cityValue));
    }
  }, [cityValue, dispatch]);

  return (
    <div className="ct-location-modal">
      <input
        value={cityValue}
        type="text"
        name="city"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default LocationModal;
