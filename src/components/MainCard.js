import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {MEDIUM_FONT, LARGE_FONT, X_LARGE_FONT, PRIMARY} from '../constants';

import {weatherConditions} from '../WeatherConditions.js';
import {dateFormatter, tempFormatter, getWeatherDay} from '../utils';
import {CustomText} from './CustomText';

const MainCard = props => {
  const {weather, setChosenDate} = props;
  
  return (
    <>
        <TouchableOpacity
          style={styles.todayWeatherContainer}
          onPress={() => setChosenDate(weather)}>
          <View style={styles.leftDisplay}>
            <CustomText style={[styles.displayDate]}>
              {`${getWeatherDay(weather?.dt)}, ${dateFormatter(weather?.dt)}`}
            </CustomText>
            <CustomText style={styles.tempMax}>
              {tempFormatter(weather.main.temp_max)}
              &deg;
            </CustomText>
            <CustomText style={styles.tempMin}>
              {tempFormatter(weather.main.temp_min)}
              &deg;
            </CustomText>
          </View>
          <View style={styles.rightDisplay}>
            <Image
              style={styles.image}
              source={weatherConditions[(weather?.weather[0]?.icon)][0]}
            />
            <CustomText style={styles.weatherText}>
              {weather?.weather[0].main}
            </CustomText>
          </View>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  todayWeatherContainer: {
    flex: 0.35,
    flexDirection: 'row',
    backgroundColor: PRIMARY,
    padding: 20,
  },
  displayDate: {
    fontSize: 24,
    color: '#FFF',
  },
  tempMax: {
    fontSize: 84,
    color: '#FFF',
    fontFamily: 'sans-serif-light',
  },
  tempMin: {
    fontSize: 42,
    color: '#FFF',
  },
  weatherText: {
    fontSize: 24,
    color: '#FFF',
  },
  leftDisplay: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rightDisplay: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: '90%',
  },
});

export default MainCard;
