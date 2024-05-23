import { useSelector } from "react-redux";

const WeatherCard = () => {
  const weatherData = useSelector((state) => state.weatherData.data);
  return (
    <section>
      <h2>{weatherData.location.name}</h2>
    </section>
  );
};

export default WeatherCard;
