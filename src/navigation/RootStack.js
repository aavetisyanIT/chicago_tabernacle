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
      <Screen name="TopTabsSermonStack" component={TopTabsSermonStack} />
      <Screen name="TopTabsStack" component={TopTabsStack} />
    </Navigator>
  );
};

export default RootStack;
