import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/screens/home.screen';
import PrayerRequestScreen from '../views/screens/prayer-request.screen';
import DrawerContent from './DrawerContent';
import TopTabsStack from './TopTabsStack';
import SideMenuButton from './../views/components/side-menu-button';

const {Navigator, Screen} = createStackNavigator();

const DrawerStack = ({navigation}) => {
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
          title: 'CHICAGO TABERNCLE',
          headerLeft: () => <SideMenuButton navigation={navigation} />,
        }}
      />
      <Screen
        name="PrayrRequest"
        component={PrayerRequestScreen}
        options={{
          title: 'PRAYER REQUEST',
          headerLeft: () => <SideMenuButton navigation={navigation} />,
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
