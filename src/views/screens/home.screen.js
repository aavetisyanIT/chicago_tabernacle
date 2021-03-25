import React from 'react';
// import TabComponent from '../components/tab.component';
import {Text, Button, View} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
      {/* <Button
        title="Prayer Request"
        onPress={() => navigation.navigate('PrayerRequest')}
      /> */}
    </>
  );
}
