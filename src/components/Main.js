import React from 'react';
import {StyleSheet, View} from 'react-native';

import MainCard from './MainCard';
import SmallCard from './SmallCard';

const Main = props => {
  const {setChosenDate, weatherArray, currentWeather} = props;

  const renderList = () => {
    return weatherArray && weatherArray.map((weather, index) => {
      return (
        <SmallCard
          key={index}
          weather={weather}
          setChosenDate={setChosenDate}
        />
      )
    });
  }
  console.log("array", weatherArray)
  console.log("current", currentWeather)
  return (
    <>
      {weatherArray && currentWeather && (
        <View style={styles.container}>
          <MainCard weather={currentWeather} setChosenDate={setChosenDate} />
          {renderList()}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Main;
