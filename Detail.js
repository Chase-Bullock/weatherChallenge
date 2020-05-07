import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { SECONDARY, PRIMARY, X_LARGE_FONT, LARGE_FONT, SMALL_FONT, MEDIUM_FONT, GREY_FONT } from "./constants"
import { dateFormatter, getWeatherDay, getDirection, windFormatter } from './utils'
import LargeCard from './LargeCard';


const Detail = (props) => {
  const { weather, datePicker } = props;


  return (
    <>
      <View style={styles.navBar}>
        <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => datePicker()}>
          <Image
            style={styles.icon}
            source={require('./Assets/backArrow.png')}
          />
        </TouchableOpacity>
      </View>
      {weather != null &&
        <View style={styles.container}>
          <View>
            <Text style={styles.day}>{getWeatherDay(weather?.dt)}</Text>
            <Text style={styles.date}>{dateFormatter(weather?.dt)}</Text>
          </View>
          <LargeCard
            displayDate={false}
            weather={weather}
            fontColor={'#000'}
            backgroundColor={SECONDARY}
            weatherFontSize={SMALL_FONT}
            secondaryFontColor={GREY_FONT}
          />
          <View style={{ flex: .5, backgroundColor: SECONDARY }}>
            <Text style={styles.textBox}>Humidity: {weather.main.humidity} %</Text>
            <Text style={styles.textBox}>Pressure: {weather.main.pressure} hPa</Text>
            <Text style={styles.textBox}>Wind: {windFormatter(weather.wind)}</Text>
          </View>
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: SECONDARY,
    padding: 20
  },
  textBox: {
    fontSize: 20,
  },
  navBar: {
    flex: .1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
  },
  day: {
    fontSize: MEDIUM_FONT,
    fontWeight: '700'
  },
  date: {
    fontSize: SMALL_FONT,
    color: GREY_FONT
  },
  icon: {
    width: '10%', height: '100%'
  },

});

export default Detail;
