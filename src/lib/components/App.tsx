import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";

// Components
import { Header, Icon, Display, Footer } from "./";

function App() {
  const city = "Hamburg";
  const country = "DE";

  const [currentWeather, setCurrentWeather] = useState<any>();
  const [coordinate, setCoordinate] = useState<{
    lat: string;
    lon: string;
  }>({
    lat: "",
    lon: "",
  });

  useEffect(() => {
    const getCo = async () => {
      try {
        const co = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${env.API_KEY}`
        );

        if (co.status === 200) {
          setCoordinate({
            lat: co.data[0].lat,
            lon: co.data[0].lon,
          });
        }
      } catch (error: any) {
        console.error("error:", error.message);
      }
    };

    const timeout = setTimeout(() => {
      getCo();
    }, 1);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (coordinate.lat !== "" && coordinate.lon !== "") {
      const getCw = async () => {
        try {
          const cw = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${env.API_KEY}&units=metric&lang=de`
          );

          if (cw.status === 200) {
            setCurrentWeather(cw.data);
          }
        } catch (error: any) {
          console.error("error:", error.message);
        }
      };

      const timeout = setTimeout(() => {
        getCw();
      }, 1);

      return () => clearTimeout(timeout);
    }
  }, [coordinate.lat, coordinate.lon]);

  return (
    <div className="app">
      <Header />
      <main>
        <Icon
          icon={currentWeather ? currentWeather.weather[0]?.icon : null}
          alt={currentWeather ? currentWeather.weather[0]?.main : null}
        />
        <Display data={currentWeather} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
