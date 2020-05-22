import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {MEDIUM_FONT, SECONDARY, GREY_FONT} from '../constants';
import {weatherConditions} from '../WeatherConditions.js';
import {dateFormatter, tempFormatter, getWeatherDay} from '../utils';
import {CustomText} from './CustomText';

const DetailCard = props => {
  const {weather} = props;

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <CustomText style={styles.day}>{getWeatherDay(weather?.dt)}</CustomText>
        <CustomText style={styles.date}>
          {dateFormatter(weather?.dt)}
        </CustomText>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.leftDisplay}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 15,
    flexDirection: 'column',
    backgroundColor: SECONDARY,
  },
  dateContainer: {
    flex: 0.35,
  },
  currentWeather: {
    flex: 1,
  },
  mainBox: {
    flex: 1,
    flexDirection: 'row',
  },
  day: {
    fontSize: 24,
    fontFamily: 'sans-serif-condensed',
    fontWeight: '700', //Should be 600
    padding: '0.3%',
  },
  date: {
    color: GREY_FONT,
    fontSize: 18,
    padding: '0.3%',
    fontWeight: '700',
  },
  displayDate: {
    fontSize: MEDIUM_FONT,
    paddingTop: 10,
  },
  tempMax: {
    fontSize: 118,
    fontFamily: 'sans-serif-light',
  },
  tempMin: {
    fontSize: 56,
    paddingBottom: 15,
    color: GREY_FONT,
  },
  weatherText: {
    paddingBottom: 10,
  },
  leftDisplay: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rightDisplay: {
    flex: 0.5,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: '90%',
    height: '90%',
  },
});

export default DetailCard;
