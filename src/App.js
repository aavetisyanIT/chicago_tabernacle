import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './navigation/RootNavigation';
import RootStack from './navigation/RootStack';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </NavigationContainer>
  );
}
