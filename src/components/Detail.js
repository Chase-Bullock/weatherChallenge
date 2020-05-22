import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SECONDARY} from '../constants';
import DetailCard from './DetailCard';
import DetailBox from './DetailBox';

const Detail = props => {
  const {weather} = props;

  return (
    <>
        <View style={styles.container}>
          <DetailCard weather={weather} />
          <DetailBox weather={weather} />
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: SECONDARY,
    height: '100%',
  },
});

export default Detail;
