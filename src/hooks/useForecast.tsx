import { useState, useEffect, ChangeEvent } from "react";
import { optionType,forecastType } from "../types";

const useForecast = () => {
  const [term, setTerm] = useState<string>(""); //map user input
  const [city, setCity] = useState<optionType | null>(null);
  const [dropdown, setDropDown] = useState<[]>([]); //map the dropdown menu we get from the search options api
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=1e979bf7493dc112022a5155c39810d9`
    )
      .then((res) => res.json())
      .then((data) => setDropDown(data));
  };

  const getForeCast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=1e979bf7493dc112022a5155c39810d9`
    )
      .then((res) => res.json())
      .then((data) => {
       const forecastData = {
        main:data.main, name:data.name,sys:data.sys,weather:data.weather,wind:data.wind
       }
       setForecast(forecastData)
      });
  };

  const onSubmit = () => {
    if (!city) return;
    getForeCast(city);
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);

    if (e.target.value === "") return;

    getSearchOptions(e.target.value);
  };
  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setDropDown([]);
    }
  }, [city]);

  return {
    term,
    dropdown,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};

export default useForecast;
