import React, { useEffect, useState } from 'react';
import Main from './Main';
import Detail from './Detail';
import { preloadedWeatherArray } from './constants';

const App = () => {
  const [date, setDate] = useState();
  const [weatherArray, setWeatherArray] = useState();

  // api does not allow fetching created data in constants.js file
  // const fetchWeather = () => {
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/forecast/daily?q=dallas&units=imperial&cnt=5&APPID=eb5d165d5a5cb39b9fac037f3cf482be`
  //   )
  //     .then(res => res.json())
  //     .then(res => setWeatherArray(res));
  // }

  useEffect(() => {
    setWeatherArray(preloadedWeatherArray)
  }, [])

  return (
    <>
      {date == null ?
        <Main datePicker={setDate} weatherArray={weatherArray} /> :
        <Detail datePicker={setDate} weather={date} />
      }
    </>
  );
};

export default App;
