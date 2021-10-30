import React from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import * as RootNavigation from './RootNavigation';
import {AppContext} from './../context/app.context';
import CustomDrawerLoginView from './../custom-components/custom-drawer-login-view';
import {AuthContext} from '../authentication/AuthProvider';

const DrawerContent = props => {
  const [{user, initializingAuth}] = React.useContext(AppContext);
  const {
    onGoogleSignInPress,
    onGoogleSignOutPress,
    onAuthStateChanged,
  } = React.useContext(AuthContext);

  React.useEffect(() => {
    //possible issue with this call
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{paddingTop: 0, marginTop: 0}}>
      <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
          <CustomDrawerLoginView
            user={user}
            //initializing is set to false cause onAuthStateChanged method issue
            initializing={false}
            onTouchableClick={onGoogleSignInPress}
          />
        </Drawer.Section>
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
          <DrawerItem label="Log Out" onPress={onGoogleSignOutPress} />
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
