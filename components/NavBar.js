import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {PRIMARY} from '../constants';

const NavBar = props => {
  const {chosenDate, setChosenDate} = props;

  return (
    <View style={styles.navBar}>
      {chosenDate && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setChosenDate()}>
          <Image
            style={styles.icon}
            source={require('../Assets/backArrow.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flex: 0.1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    width: '100%',
    height: '100%',
  },
  icon: {
    justifyContent: 'center',
  },
});
export default NavBar;
