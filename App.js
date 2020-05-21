import React, {useEffect, useState} from 'react';
import Main from './components/Main';
import Detail from './components/Detail';
import {preloadedWeatherArray, preloadedCurrentWeather} from './constants';
import NavBar from './components/NavBar';

const App = () => {
  const [chosenDate, setChosenDate] = useState();
  const [weatherArray, setWeatherArray] = useState();
  const [currentWeather, setCurrentWeather] = useState();

  useEffect(() => {
    setWeatherArray(preloadedWeatherArray);
    setCurrentWeather(preloadedCurrentWeather);
  }, []);

  return (
    <>
      {/* Anything outside of native React Native library is not allowed, React Navigation is not included in the native library (https://reactnative.dev/docs/navigation), this acts as a basic version of it. */}
      <NavBar chosenDate={chosenDate} setChosenDate={setChosenDate} />
      {chosenDate == null ? (
        <Main
          setChosenDate={setChosenDate}
          weatherArray={weatherArray}
          currentWeather={currentWeather}
        />
      ) : (
        <Detail setChosenDate={setChosenDate} weather={chosenDate} />
      )}
    </>
  );
};

export default App;
