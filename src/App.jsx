import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./redux/slice/weatherData";
import SearchBar from "./components/SearchBar";
import LoadingScreen from "./components/LoadingScreen";
import WeatherCard from "./components/WeatherCard";

function App() {
  // redux reducer dispatches and selectors
  const dispatch = useDispatch();
  const weatherDataStatus = useSelector((state) => state.weatherData.status);
  const initialCity = "chennai";

  // useEffect for initial render
  useEffect(() => {
    console.log("initial fetch");
    dispatch(fetchWeatherData(initialCity));
  }, []);

  return (
    <>
      {weatherDataStatus == "succeeded" ? <SearchBar /> : <LoadingScreen />}
      <WeatherCard />
    </>
  );
}

export default App;
