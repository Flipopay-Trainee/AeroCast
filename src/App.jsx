import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("chennai");
  const [data, setData] = useState(null);
  const [initialFetch, setInitialFetch] = useState(false);

  const fetchWeatherData = async () => {
    if (input == "") {
      console.log("enter a city name");
      return;
    }
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=b94ce14915d7492999b73045242005&q=${input}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      console.log(result);
      setInput("");
    } catch (error) {
      console.log(error.message);
    }
  };

  let n = 0;

  useEffect(() => {
    if (!initialFetch) {
      fetchWeatherData();
      setInitialFetch(true);
      n++;
      console.log(n);
      console.log("ran from useEffect");
    }
  }, [initialFetch]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeatherData();
      console.log("ran from enter key");
    }
  };

  return (
    <>
      <h1 className="font-sans font-black text-[5rem]">API Test Phase</h1>
      <input
        className="border-2 border-black p-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <br />
      <button
        onClick={fetchWeatherData}
        className="rounded-md mt-2 p-2 border-2 border-black"
      >
        send request
      </button>
      {data && data.current && data.current.condition && (
        <img src={data.current.condition.icon} alt="worked" />
      )}
    </>
  );
}

export default App;
