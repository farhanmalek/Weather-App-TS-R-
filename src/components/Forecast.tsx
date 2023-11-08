import { forecastType } from "../types";
import React from "react";

type Props = {
  data: forecastType;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}<sup>o</sup>
  </span>
);

function Forecast({ data }: Props): JSX.Element {
  const { name, sys, main, weather } = data;

  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {name}<span className="font-thin">{sys.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(main.temp)} />
          </h1>
          <div className="text-lg font-medium">
            Feels like: <Degree temp={Math.round(main.feels_like)} />
          </div>
          <div className="text-lg font-medium">
            Humidity: {main.humidity}%
          </div>
          <div className="text-lg font-medium">
            Weather: {weather[0].description}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Forecast;
