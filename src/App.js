import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './navigation/RootNavigation';
import RootStack from './navigation/RootStack';
import {reactNativePaperTheme} from './config/react-native-paper-theme';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <PaperProvider theme={reactNativePaperTheme}>
        <RootStack />
      </PaperProvider>
    </NavigationContainer>
  );
}
