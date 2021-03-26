import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './navigation/HomeStact';
import PrayerRequestStack from './navigation/PrayerRequestStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="PrayerRequest" component={PrayerRequestStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
