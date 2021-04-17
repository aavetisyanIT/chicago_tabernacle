import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator';
import TopTabsSermonStack from './TopTabsSermonStack';
import TopTabsStack from './TopTabsStack';

const {Navigator, Screen} = createStackNavigator();

const RootStack = () => {
  return (
    <Navigator>
      <Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Screen name="TopTabsStack" component={TopTabsStack} />
      <Screen name="TopTabsSermonStack" component={TopTabsSermonStack} />
      {/* <Screen name="CustomPushStack" component={CustomPushStack} /> */}
    </Navigator>
  );
};

export default RootStack;
