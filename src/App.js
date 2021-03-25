import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './infrastructure/theme/index';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Text>Chicago Tabernacle</Text>
      </ThemeProvider>
    </NavigationContainer>
  );
}
