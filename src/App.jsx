import { useState } from "react";
import Card from "./components/Card";
import Forecast from "./components/Forecast";
// import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  // function updateSearch() {
  //   setSearch()
  // }

  useState(() => {
    async function requestWeatherData() {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&cnt=3&appid=b780b9f72eb44e0e6e4d14fb21091fed"
      );
      const data = await response.json();
      console.log(data);
    }
    requestWeatherData();
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <Card />
      <Forecast />
    </div>
  );
}

export default App;
