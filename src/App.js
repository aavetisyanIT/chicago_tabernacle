import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './infrastructure/theme/index';
import FrontScreen from './views/screens/front.screen';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <FrontScreen />
      </ThemeProvider>
    </NavigationContainer>
  );
}
