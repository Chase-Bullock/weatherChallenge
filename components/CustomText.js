import React from 'react';
import {Text, StyleSheet} from 'react-native';

//Font should be weighted in a few places. Android font weight is broken in react-native versions 0.60.5 and higher. I am running 0.62.2. (https://github.com/facebook/react-native/issues/26193)
//There is a very hacky solution that I did not include here. (https://github.com/facebook/react-native/issues/25696)

export const CustomText = props => {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'sans-serif-condensed',
    fontWeight: '500',
  },
});
