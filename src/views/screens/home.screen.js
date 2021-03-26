import React from 'react';
import TabComponent from '../components/tab.component';
import {Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <TabComponent />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
}
