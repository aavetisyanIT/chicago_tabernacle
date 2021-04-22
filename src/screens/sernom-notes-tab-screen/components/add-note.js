import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AddNote = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Note</Text>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {},
  text: {color: '#bc9665'},
});
