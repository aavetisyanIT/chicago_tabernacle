import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './../views/screens/home.screen';
import SideMenuButton from '../views/components/side-menu-button';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {backgroundColor: '#fff'},
      headerLeftContainerStyle: {
        marginLeft: '1%',
      },
      headerTitleStyle: {
        display: 'flex',
        flex: 1,
        fontFamily: 'Roboto-Light',
        textAlign: 'center',
        marginRight: '15%',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'CHICAGO TABERNCLE',
        headerLeft: () => <SideMenuButton navigation={navigation} />,
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
