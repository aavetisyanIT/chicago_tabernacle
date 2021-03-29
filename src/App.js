import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator';
import {navigationRef} from './navigation/RootNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <PaperProvider>
        <DrawerNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}
