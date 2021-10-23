import React from 'react';
import auth from '@react-native-firebase/auth';
import {actionTypes} from './../context/action.types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: devEnvironmentVariables.DEV_WEBCLIENTID,
});

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [state, dispatch] = React.useContext(AppContext);
  const {user} = state;
  const setUser = user => {
    dispatch({type: actionTypes.setUser, payload: user});
  };
  const onSignInPress = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(`onSignInPress error: ${error}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        onSignInPress,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
