import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/slice/weatherData";

const SearchBar = () => {
  // useStates
  const [inputText, setInputText] = useState("");

  // redux reducer dispatches and selectors
  const dispatch = useDispatch(); //
  const weatherData = useSelector((state) => state.weatherData);
  const weatherDataStatus = useSelector((state) => state.weatherData.status);

  // useEffect for initial render
  // useEffect(() => {
  //   console.log("initial fetch");
  //   dispatch(fetchWeatherData(inputText));
  // }, []);

  // function to handle keydown for enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchWeatherData(inputText));
      setInputText("");
    }
  };

  return (
    <section className="flex flex-col justify-items-center items-center">
      <h1 className="font-sans font-black text-[5rem]">API Test Phase</h1>
      <input
        className="border-2 border-black p-2"
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <br />
      <button
        className="rounded-md mt-2 p-2 border-2 border-black"
        onClick={() => {
          dispatch(fetchWeatherData(inputText));
          setInputText("");
        }}
      >
        Fetch Weather Data
      </button>
      {/* <h2>{weatherData.location.country}</h2> */}
    </section>
  );
};

export default SearchBar;
