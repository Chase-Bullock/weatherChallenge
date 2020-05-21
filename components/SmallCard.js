import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {SMALL_FONT, MEDIUM_FONT, GREY_FONT} from '../constants';
import {weatherConditions} from '../WeatherConditions.js';
import {tempFormatter, getWeatherDay} from '../utils';
import {CustomText} from './CustomText';

const SmallCard = props => {
  const {weather, setChosenDate} = props;

  /* The smaller cards color in the docs are actually just the background gradient, however Gradients not supported by React Native out of the box */

  return (
    <>
      {weather != null && (
        <TouchableOpacity
          style={styles.dayRow}
          onPress={() => setChosenDate(weather)}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={weatherConditions[(weather?.weather[0]?.icon)][1]}
            />
          </View>
          <View style={styles.dateContainer}>
            <CustomText style={styles.day}>
              {getWeatherDay(weather.dt)}
            </CustomText>
            <CustomText style={styles.weatherType}>
              {weather?.weather[0].main}
            </CustomText>
          </View>
          <View style={styles.tempContainer}>
            <CustomText style={styles.tempMax}>
              {tempFormatter(weather.main.temp_max)}
              &deg;
            </CustomText>
            <CustomText style={styles.tempMin}>
              {tempFormatter(weather.main.temp_min)}
              &deg;
            </CustomText>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dayRow: {
    flex: 0.11,
    flexDirection: 'row',
    padding: '1.5%',
  },
  day: {
    fontSize: 24,
  },
  weatherType: {
    fontSize: 18,
  },
  tempMax: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tempMin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GREY_FONT,
  },
  dateContainer: {
    flex: 0.65,
    fontSize: 20,
  },
  iconContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '60%',
    height: '60%',
  },
  tempContainer: {
    flex: 0.4,
    alignItems: 'center',
  },
});

export default SmallCard;
