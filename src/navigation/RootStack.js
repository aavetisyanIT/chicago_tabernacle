import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator';
import TopTabsSermonStack from './TopTabsSermonStack';
import TopTabsStack from './TopTabsStack';
import CustomPushScreensStack from './CustomPushScreensStack';

const {Navigator, Screen} = createStackNavigator();

const RootStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Screen name="TopTabsStack" component={TopTabsStack} />
      <Screen name="TopTabsSermonStack" component={TopTabsSermonStack} />
      <Screen
        name="CustomPushScreensStack"
        component={CustomPushScreensStack}
        headerShown={false}
      />
    </Navigator>
  );
};

export default RootStack;
