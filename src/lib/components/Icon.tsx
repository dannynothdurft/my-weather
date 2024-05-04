import React, { FC } from "react";

interface IconProps {
  icon: string;
  alt: string;
}

const Icon: FC<IconProps> = ({ icon, alt }) => {
  return (
    <div className="ct-icon">
      {icon ? (
        <img
          width={"200px"}
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={alt}
        />
      ) : null}
    </div>
  );
};

export default Icon;
