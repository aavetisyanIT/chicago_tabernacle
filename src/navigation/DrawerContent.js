import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Avatar} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import * as RootNavigation from './RootNavigation';
import {AppContext} from './../context/app.context';
import devEnvironmentVariables from './../config/env';
import {actionTypes} from './../context/action.types';

GoogleSignin.configure({
  webClientId: devEnvironmentVariables.DEV_WEBCLIENTID,
});

const onGoogleButtonPress = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};

const DrawerContent = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [state, dispatch] = React.useContext(AppContext);
  const {user} = state;

  const onAuthStateChanged = user => {
    dispatch({type: actionTypes.SET_USER, payload: user});
    if (initializing) setInitializing(false);
  };

  const handleSignInTouchableArea = async () => {
    try {
      const result = await onGoogleButtonPress();
      dispatch({type: actionTypes.SET_USER, payload: result});
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        dispatch({type: actionTypes.SET_USER, payload: null});
        setInitializing(true);
        alert('Signing out!');
      });
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{paddingTop: 0, marginTop: 0}}>
      <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
          <TouchableWithoutFeedback onPress={handleSignInTouchableArea}>
            <View style={styles.userInfoSection}>
              <Avatar.Image
                source={
                  user && !initializing
                    ? {uri: user.photoURL}
                    : require('../assets/demo_icon.png')
                }
                size={60}
                style={styles.icon}
              />
              <Text style={styles.signInMessage}>
                Log in using your gmail account
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </Drawer.Section>
        {/* </ImageBackground> */}
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="WHAT'S NEW"
            onPress={() => RootNavigation.navigate("WHAT'S NEW")}
          />
          <DrawerItem
            label="SERMONS"
            onPress={() => {
              RootNavigation.navigate('SERMONS');
            }}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            label="Prayer Request"
            onPress={() => RootNavigation.navigate('PrayrRequest')}
          />
          <DrawerItem
            label="Give"
            onPress={() =>
              Linking.openURL('https://www.chicagotabernacle.org/give/')
            }
          />
          <DrawerItem label="Ministries" onPress={() => {}} />
          <DrawerItem label="Serve" onPress={() => {}} />
          <DrawerItem label="About" onPress={() => {}} />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            label="Facebook"
            onPress={() =>
              Linking.openURL('https://www.facebook.com/chicagotab/')
            }
          />
          <DrawerItem
            label="Instagram"
            onPress={() =>
              Linking.openURL('https://www.instagram.com/chicagotab/')
            }
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem label="Log Out" onPress={handleSignOut} />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  userInfoSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 12,
  },
  icon: {
    marginBottom: 35,
  },
  signInMessage: {
    color: '#787879',
    fontSize: 16,
  },
  row: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
