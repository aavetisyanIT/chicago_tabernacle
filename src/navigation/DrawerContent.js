import React from 'react';
import {View, StyleSheet, ImageBackground, Linking} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Avatar} from 'react-native-paper';

import * as RootNavigation from './RootNavigation';

const DrawerContent = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{paddingTop: 0, marginTop: 0}}>
      <View style={styles.drawerContent}>
        {/* <ImageBackground
          source={require('./../assets/blue1.jpg')}
          style={styles.image}> */}
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/71193796?v=4',
              }}
              size={75}
            />
            {/* <Title style={styles.title}>Rukmoni Nagarajan</Title>
            <Caption style={styles.caption}>@rukstech</Caption> */}
          </View>
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
          <DrawerItem label="Log Out" onPress={() => {}} />
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  userInfoSection: {
    margin: 0,
    paddingTop: 80,
    paddingLeft: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
  },
  caption: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 14,
    paddingBottom: 20,
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
