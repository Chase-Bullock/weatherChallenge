import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { SECONDARY, SMALL_FONT, MEDIUM_FONT, LARGE_FONT, X_LARGE_FONT } from "./constants"

import { weatherConditions } from './WeatherConditions.js';
import { tempFormatter, getWeatherDay } from './utils';

const SmallCard = (props) => {
  const { weather, fontColor, backgroundColor, datePicker } = props

  return (
    <>
      {weather != null &&
        <TouchableOpacity style={[styles.dayRow, { backgroundColor: backgroundColor }]} onPress={() => datePicker(weather)}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={weatherConditions['s' + weather?.weather[0]?.icon]}
            />
          </View>
          <View style={styles.dateContainer}>
            <Text style={[styles.day, { color: fontColor }]}>
              {getWeatherDay(weather.dt)}
            </Text>
            <Text style={[styles.weatherType, { color: fontColor }]}>
              {weather?.weather[0].main}
            </Text>
          </View>
          <View style={styles.tempContainer}>
            <Text style={[styles.tempMax, { color: fontColor, fontWeight: '300' }]}>
              {tempFormatter(weather.main.temp_max)}<Text>&deg;</Text>
            </Text>
            <Text style={[styles.tempMin, { color: fontColor, paddingBottom: 15 }]}>{tempFormatter(weather.main.temp_min)}<Text>&deg;</Text></Text>
          </View>
        </TouchableOpacity>
      }
    </>
  );
};

const styles = StyleSheet.create({
  dayRow: {
    flex: .10,
    backgroundColor: SECONDARY,
    flexDirection: 'row',
    padding: 5,
    marginTop:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  day: {
    fontSize: MEDIUM_FONT
  },
  weatherType: {
    fontSize: SMALL_FONT
  },
  tempMax: {
    fontSize: MEDIUM_FONT,
    fontWeight: '900'
  },
  tempMin: {
    fontSize:SMALL_FONT
  },
  dateContainer: {
    flex: .65,
    fontSize: 20
  },
  iconContainer: {
    flex: .15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: '70%', height: '70%'
  },
  tempContainer: {
    flex: .20,
  }
});

export default SmallCard;
