import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import { PRIMARY, SECONDARY, SMALL_FONT, MEDIUM_FONT, LARGE_FONT, X_LARGE_FONT } from "./constants"
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { weatherConditions } from './WeatherConditions.js';
import { dateFormatter, tempFormatter, getWeatherDay } from './utils';

const LargeCard = (props) => {
  const { weather, fontColor, secondaryFontColor, backgroundColor, datePicker, displayDate, weatherFontSize } = props

  return (
    <>
      {weather != null &&
        <TouchableOpacity style={[styles.todayWeatherContainer, { backgroundColor: backgroundColor }]} onPress={() => datePicker(weather)}>
          <View style={{ flex: .5, alignItems: "center", justifyContent: "space-between" }}>{displayDate &&
            <Text style={[styles.displayDate, { color: fontColor }]}>{`${getWeatherDay(weather?.dt)} ${dateFormatter(weather?.dt)}`}</Text>
          }
            <Text style={[styles.tempMax, { color: fontColor }]}>
              {tempFormatter(weather.main.temp_max)}<Text>&deg;</Text>
            </Text>
            <Text style={[styles.tempMin, { color: secondaryFontColor ? secondaryFontColor : fontColor }]}>{tempFormatter(weather.main.temp_min)}<Text>&deg;</Text></Text>
          </View>
          <View style={{ flex: .5, alignItems: "center", justifyContent: "space-around" }}>
            <Image style={{ width: '70%', height: '70%' }} source={weatherConditions['img' + weather?.weather[0]?.icon]} />
            <Text style={[styles.weatherText, { color: fontColor, fontSize: weatherFontSize }]}>{weather?.weather[0].main}</Text>
          </View>
        </TouchableOpacity>

      }
    </>
  );
};

const styles = StyleSheet.create({
  todayWeatherContainer: {
    flex: .33,
    flexDirection: 'row',
  },
  displayDate: {
    fontSize: MEDIUM_FONT,
    paddingTop: 10
  },
  tempMax: {
    fontSize: X_LARGE_FONT,
  },
  tempMin: {
    fontSize: LARGE_FONT,
    paddingBottom: 15
  },
  weatherText: {
    paddingBottom: 10
  },

});

export default LargeCard;
