import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

import {navigationRef} from './navigation/RootNavigation';
import RootStack from './navigation/RootStack';
import {reactNativePaperTheme} from './config/react-native-paper-theme';
import {AppContextProvider} from './context/app.context.provider';

GoogleSignin.configure({
  webClientId: `1027043919366 - orboquk60q94tb85eds13i1e3e147tkg.apps.googleusercontent.com`,
});

const onGoogleButtonPress = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <PaperProvider theme={reactNativePaperTheme}>
        <AppContextProvider>
          <RootStack />
        </AppContextProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
