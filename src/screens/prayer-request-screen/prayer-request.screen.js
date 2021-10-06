import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Divider, Text, TextInput, Button, Checkbox} from 'react-native-paper';

export default function PrayerRequestScreen() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const handleOnChangeText = text => {
    setText(text);
    console.log(text);
  };
  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <Divider />
      <Text style={styles.header}>How Can We Pray For You</Text>
      <Text style={styles.pageContent}>
        If you have a prayer request, please submit it to us; we will pray for
        your request for thirty days at our prayer meetings, as will the
        Intercession Ministry. Prayer request cards are also available at the
        church office or at any of our weekly services.
      </Text>
      <Divider />
      <TextInput
        label="Prayer"
        value={text}
        onChangeText={handleOnChangeText}
        style={styles.textInput}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          color="#bc9665"
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.checkboxLabelText}>Please make anonymous</Text>
      </View>
      <Divider />
      <Button
        style={styles.button}
        color="lightgray"
        mode="outlined"
        onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {margin: 15, fontSize: 25, fontFamily: 'Roboto-Light'},
  pageContent: {margin: 15, fontSize: 18, fontFamily: 'Roboto-Light'},
  textInput: {backgroundColor: '#fff'},
  checkboxContainer: {
    flexDirection: 'row',
    margin: 15,
  },
  checkboxLabelText: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Roboto-Light',
  },
  button: {margin: 20},
});
