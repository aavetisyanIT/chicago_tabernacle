import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStackScreen from './navigation/HomeStactScreen';
import PrayerRequestStackScreen from './navigation/PrayerRequestStackScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen
          name="PrayerRequest"
          component={PrayerRequestStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
