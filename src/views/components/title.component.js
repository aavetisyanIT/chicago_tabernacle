import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Title() {
  return <Text style={styles.headerText}>CHICAGO TABERNACLE</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#555555',
    fontFamily: 'Roboto-Light',
    fontSize: 27,
  },
});
