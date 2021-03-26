import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PrayerRequestScreen from '../views/screens/prayer-request.screen';
import SideMenuButton from '../views/components/side-menu-button';

const {Navigator, Screen} = createStackNavigator();

const PrayerRequestStack = ({navigation}) => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {backgroundColor: '#fff'},
      headerLeftContainerStyle: {
        marginLeft: '2%',
      },
      headerTitleStyle: {
        display: 'flex',
        flex: 1,
        fontFamily: 'Roboto-Light',
        textAlign: 'center',
        marginRight: '15%',
      },
    }}>
    <Screen
      name="PrayerRequest"
      component={PrayerRequestScreen}
      options={{
        title: 'PRAYER REQUEST',
        headerLeft: () => <SideMenuButton navigation={navigation} />,
      }}
    />
  </Navigator>
);

export default PrayerRequestStack;
