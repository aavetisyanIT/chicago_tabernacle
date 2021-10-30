import React, {useRef} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {AppContext} from './../context/app.context';
import {actionTypes} from './../context/action.types';
import devEnvironmentVariables from './../config/env';

//Issues: different user object returned and set to state
//initializing is not working
//running line after signing in

const AuthProvider = ({children}) => {
  const [{initializingAuth}, dispatch] = React.useContext(AppContext);

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: devEnvironmentVariables.DEV_WEBCLIENTID,
      offlineAccess: true,
      forceConsentPrompt: true,
      hostedDomain: '',
      accountName: '',
    });
  }, []);

  const onGoogleSignInPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch({type: actionTypes.SET_USER, payload: userInfo.user});
      console.log('User: ' + JSON.stringify(userInfo.user));
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(`onGoogleSignInPress error: User cancelled the login flow`);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(
          `onGoogleSignInPress error: Operation google sign in is in progress already`,
        );
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(
          `onGoogleSignInPress error: Play services not available or outdated`,
        );
      } else {
        console.log(`onGoogleSignInPress error: ${error}`);
      }
    }
  };

  const onGoogleSignOutPress = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
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
