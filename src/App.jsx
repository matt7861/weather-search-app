import { useState } from "react";
import Block from "./components/Block";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [displayError, setDisplayError] = useState(false);

  function getWeatherData(e) {
    e.preventDefault();

    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=88392d6f023c4084a0075915230603&q=${search.replace(
        / /g,
        "%20"
      )}&days=5&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => updateMovieData(data))
      .catch((error) => {
        console.error(error);
        setDisplayError(true);
      });
  }

  function updateMovieData(data) {
    if (data.error) {
      setDisplayError(true);
      console.error(data.error);
    } else {
      setDisplayError(false);
      setMovieData(
        data.forecast.forecastday.map((dayData) => {
          return {
            epoch: dayData.date_epoch,
            minTemp: dayData.day.mintemp_c,
            maxTemp: dayData.day.maxtemp_c,
            condition: dayData.day.condition.text,
            icon: dayData.day.condition.icon,
          };
        })
      );
    }
  }

  // console.log(movieData);

  return (
    <div>
      <form onSubmit={getWeatherData}>
        <label>
          Search City:
          <input
            name="city"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {displayError ? (
          <p>Please check your search and try again.</p>
        ) : (
          <>
            {movieData.length > 0
              ? movieData.map((movData, index) => (
                  <Block key={index} {...movData} />
                ))
              : ""}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
