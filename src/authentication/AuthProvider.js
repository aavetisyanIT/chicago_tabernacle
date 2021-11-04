import React, {useRef} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {AppContext} from './../context/app.context';
import {actionTypes} from './../context/action.types';
import devEnvironmentVariables from './../config/env';

//Issues:
//different user object returned and set to state:
//     doesn't seem to happen any more if app is loaded correctly. Only happens when state is changing
//     keep watching for now
//initializing is not working

const AuthProvider = ({children}) => {
  const [{initializingAuth, user}, dispatch] = React.useContext(AppContext);

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
      if (!user) {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        dispatch({type: actionTypes.SET_USER, payload: userInfo.user});
        console.log('User: ' + JSON.stringify(userInfo.user));
        const googleCredential = auth.GoogleAuthProvider.credential(
          userInfo.idToken,
        );
        return auth().signInWithCredential(googleCredential);
      }
      alert(`You are already signed in with ${user.email}`);
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
        console.log(`onGoogleSignInPress error: ${error.message}`);
      }
    }
  };

  const onGoogleSignOutPress = async () => {
    try {
      if (user) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        dispatch({type: actionTypes.SET_USER, payload: null});
        dispatch({type: actionTypes.SET_INITIALIZING_AUTH, payload: true});
        alert('Signing out!');
        return;
      }
      alert('Please sign in!');
    } catch (error) {
      console.log(`onGoogleSignOutPress error: ${error.message}`);
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
