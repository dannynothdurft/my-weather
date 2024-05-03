import React from "react";

import { Location, Arrow } from "../icons";

const Header = () => {
  return (
    <header>
      <div className="ct-location">
        <Location /> <p>Hamburg</p> <Arrow />
      </div>
      <p>Zahnrad</p>
    </header>
  );
};

export default Header;
