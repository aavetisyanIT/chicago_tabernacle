import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {Text, View, StyleSheet} from 'react-native';

const SermonCard = ({sermon, navigation}) => {
  const handlePress = () => {
    navigation.navigate('TopTabsSermonStack', {
      article: sermon.item,
      sermonCardParams: true,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={handlePress}
        borderless={true}
        centered={true}
        rippleColor="rgba(0, 0, 0, .32)">
        <View style={styles.content}>
          <Text style={styles.headLine}>{sermon.item.headline}</Text>
          <Text style={styles.description}>{sermon.item.desc}</Text>
        </View>
      </TouchableRipple>
    </View>
  );
};

export default SermonCard;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff'},
  content: {padding: 13},
  headLine: {fontFamily: 'Roboto-Medium'},
  description: {fontFamily: 'Roboto-Thin'},
});
