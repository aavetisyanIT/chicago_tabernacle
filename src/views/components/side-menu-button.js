import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const SideMenuButton = ({navigation}) => {
  return (
    <Icon.Button
      color="#bc9665"
      name="menu"
      size={25}
      iconStyle={{paddingLeft: 7}}
      backgroundColor="#fff"
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

export default SideMenuButton;
