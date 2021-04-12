import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {Text, View, StyleSheet} from 'react-native';

const SermonCard = ({sermon, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={() => console.log('clicked')}
        borderless={true}
        centered={true}
        rippleColor="rgba(0, 0, 0, .32)">
        <View style={styles.content}>
          <Text style={styles.headline}>{sermon.item.headline}</Text>
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
  headline: {fontFamily: 'Roboto-Medium'},
  description: {fontFamily: 'Roboto-Thin'},
});
