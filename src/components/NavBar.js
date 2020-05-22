import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import BackArrow from '../../Assets/backArrow.png';
import {PRIMARY} from '../constants';

const NavBar = props => {
  const {chosenDate, setChosenDate} = props;

  return (
    <View style={styles.navBar}>
      {chosenDate && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setChosenDate()}>
          <Image style={styles.icon} source={BackArrow} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flex: 0.12,
    backgroundColor: PRIMARY,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
