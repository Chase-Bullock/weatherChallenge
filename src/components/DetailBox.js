import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {SECONDARY, SMALL_FONT} from '../constants';
import {windFormatter} from '../utils';

const DetailBox = props => {
  const {weather} = props;

  return (
    <>
        <View style={styles.container}>
          <Text style={styles.textBox}>
            Humidity: {weather.main.humidity} %
          </Text>
          <Text style={styles.textBox}>
            Pressure: {weather.main.pressure} hPa
          </Text>
          <Text style={styles.textBox}>
            Wind: {windFormatter(weather.wind)}
          </Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  textBox: {
    fontSize: SMALL_FONT,
    padding: '0.5%',
  },
  container: {
    flex: 0.5,
    backgroundColor: SECONDARY,
    padding: 15,
  },
});

export default DetailBox;
