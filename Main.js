import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { PRIMARY, SECONDARY, MEDIUM_FONT } from "./constants"

import LargeCard from './LargeCard';
import SmallCard from './SmallCard';


const Main = (props) => {
  const { datePicker, weatherArray } = props;

  return (
    <>
      {weatherArray != null &&
        <View style={styles.container}>
          {weatherArray.map((weather, index) => {
            return index === 0 ?
              <LargeCard
                key={index}
                weather={weather}
                fontColor={'#FFF'}
                backgroundColor={PRIMARY}
                datePicker={datePicker}
                displayDate={true}
                weatherFontSize={MEDIUM_FONT}
              /> :
              <SmallCard
                key={index}
                weather={weather}
                backgroundColor={SECONDARY}
                datePicker={datePicker}
              />
          })}
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }

});

export default Main;
