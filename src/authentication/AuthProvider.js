import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {AppContext} from './../context/app.context';
import {actionTypes} from './../context/action.types';
import devEnvironmentVariables from './../config/env';

GoogleSignin.configure({
  webClientId: devEnvironmentVariables.DEV_WEBCLIENTID,
});

const handleGoogleSignIn = async () => {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(`handleGoogleSignIn error: ${error}`);
  }
};

const AuthProvider = ({children}) => {
  const [{initializingAuth}, dispatch] = React.useContext(AppContext);

  const onGoogleSignInPress = async () => {
    try {
      const user = await handleGoogleSignIn();
      dispatch({type: actionTypes.SET_USER, payload: user});
    } catch (error) {
      console.log(`onGoogleSignInPress error: ${error}`);
    }
  };

  const onGoogleSignOutPress = async () => {
    try {
      await auth().signOut();
      dispatch({type: actionTypes.SET_USER, payload: null});
      dispatch({type: actionTypes.SET_INITIALIZING_AUTH, payload: true});
      alert('Signing out!');
    } catch (error) {
      console.log(`onGoogleSignOutPress error: ${error}`);
    }
  };

  const onAuthStateChanged = user => {
    dispatch({type: actionTypes.SET_USER, payload: user});
    if (initializingAuth) {
      dispatch({
        type: actionTypes.SET_INITIALIZING_AUTH,
        payload: false,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        onGoogleSignInPress,
        onGoogleSignOutPress,
        onAuthStateChanged,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const AuthContext = React.createContext();
