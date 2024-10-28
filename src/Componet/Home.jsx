import  { useState } from "react";
import Button from "./Button";
import "./Home.css";

const Home = () => {
  const [area, setArea] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(""); // State to handle errors


  const updatedWeather = (data) => {
    if (data.cod === 200) {
      // Check if the response is successful
      setWeather(data);

      setError(""); // Clear any previous errors
    } else {
      setWeather({});
      setError("City not found or invalid input");
    }
    // console.log(data);
  };

  return (
    <div className="main">
      <div className="content" style={{ marginTop: "30vh" }}>
        <h1>Weather Update </h1>
        <div className="infield">
          <input
            onChange={(e) => setArea(e.target.value)}
            value={area}
            type="text"
            placeholder="Enter a State or City"
          />
          <Button area={area} btnName="Submit" update={updatedWeather} />
        </div>
        {/* Error Handling */}
        {error && <div className="error-message">{error}</div>}

        {/* Display Weather Info if available */}
        {weather.main && (
          <div className="content">
            <div>
              <h2>Weather in {weather.name}</h2>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Weather: {weather.weather[0]?.description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
