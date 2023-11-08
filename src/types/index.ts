//Specify types to import
export type optionType = {
    name:string,
    lat:number,
    lon:number,
}

export type forecastType = {
  main: {
    feels_like:number,
    humidity:number,
    temp:number,
    temp_max:number,
    temp_min: number,
  },
  name:string,
  sys: {
    country:string
  },
  weather: [
    {
      main:string,
      description:string,
    }
  ],
  wind: {
    speed:number
  }
}
   