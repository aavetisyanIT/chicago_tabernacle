import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {Avatar} from 'react-native-paper';

const CustomDrawerLoginView = ({user, initializing, onTouchableClick}) => {
  console.log(JSON.stringify(user));
  return (
    <TouchableWithoutFeedback onPress={onTouchableClick}>
      <View style={styles.userInfoSection}>
        <Avatar.Image
          source={
            user && !initializing
              ? {uri: user.photoURL}
              : require('../assets/demo_icon.png')
          }
          size={45}
          style={styles.icon}
        />
        {user && !initializing ? (
          <View>
            <Text style={styles.userDisplayName}>{user.displayName}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        ) : (
          <Text style={styles.signInMessage}>
            Log in using your gmail account
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomDrawerLoginView;

const styles = StyleSheet.create({
  userInfoSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 12,
    paddingTop: 15,
  },
  userDisplayName: {fontSize: 20, color: '#787879'},
  userEmail: {fontSize: 15, color: '#787879'},
  signInMessage: {
    color: '#787879',
    fontSize: 16,
  },
  icon: {
    marginBottom: 35,
  },
});
