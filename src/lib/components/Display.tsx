import React, { FC, ReactNode } from "react";

import { Wind, Rain } from "../icons";

interface DisplayProps {
  data: any;
}

const Display: FC<DisplayProps> = ({ data }) => {
  console.log("Display", data);

  const currentDate: ReactNode = (
    <>
      {new Intl.DateTimeFormat("de-DE", {
        day: "numeric",
        month: "long",
      }).format(new Date())}
    </>
  );

  return (
    <>
      {data ? (
        <div className="ct-display">
          <p>{currentDate.props.children}</p>
          <p className="temp-display">{data.main?.temp} &#8451;</p>
          <p className="description">{data.weather[0]?.description}</p>
          <table>
            <tbody>
              <tr>
                <td>
                  <Wind />
                </td>
                <td>Wind</td>
                <td>|</td>
                <td>{(data.wind.speed * 1.609).toFixed(2)} km/h</td>
              </tr>
              <tr>
                <td>
                  <Rain />
                </td>
                <td>Feuchtigkeit</td>
                <td>|</td>
                <td>{data.main?.humidity} %</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default Display;
