import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomButton = ({title, style, textStyle, onPress, icon}) => {
  const myIcon = <Icon name={icon} size={20} color="#bc9665" />;
  return (
    <Pressable onPress={onPress} style={style}>
      {icon ? myIcon : null}
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
