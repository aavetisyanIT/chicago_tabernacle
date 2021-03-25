import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './views/screens/home.screen';
import {Icon} from 'react-native-vector-icons/Icon';
import PrayerRequestScreen from './views/screens/prayer-request.screen';

const PrayerRequestStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="PrayerRequest" component={PrayerRequestScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
