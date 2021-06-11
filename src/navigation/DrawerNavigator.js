import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';

import DrawerContent from './DrawerContent';
import TopTabsStack from './TopTabsStack';
import SideMenuButton from './components/side-menu-button';
import TopTabsSermonStack from './TopTabsSermonStack';
import PrayerRequestScreen from './../screens/prayer-request-screen/prayer-request.screen';

const {Navigator, Screen} = createStackNavigator();

const DrawerStack = ({route}) => {
  const getHeaderTitle = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    switch (routeName) {
      case 'Home':
        return 'CHICAGO TABERNCLE';
      case 'PrayrRequest':
        return 'PRAYER REQUEST';
      case 'TopTabsSermonStack':
        return 'SERMON NOTES';
    }
  };
  return (
    <Navigator
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
      <Screen
        name="Home"
        component={TopTabsStack}
        options={{
          title: getHeaderTitle(route),
          headerLeft: () => <SideMenuButton />,
        }}
      />
      <Screen
        name="PrayrRequest"
        component={PrayerRequestScreen}
        options={{
          title: getHeaderTitle(route),
          headerLeft: () => <SideMenuButton />,
        }}
      />
      <Screen
        name="TopTabsSermonStack"
        component={TopTabsSermonStack}
        options={{
          headerShown: false,
          title: getHeaderTitle(route),
          headerLeft: () => <SideMenuButton />,
        }}
      />
    </Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={DrawerStack} headerMode="none" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
