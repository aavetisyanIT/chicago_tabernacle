import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import CustomCard from './custom-card.component';

export default function NewsCard({post}) {
  return (
    <CustomCard>
      <TouchableRipple
        borderless={true}
        centered={true}
        onPress={() => console.log('Pressed')}
        rippleColor="rgba(0, 0, 0, .32)">
        <>
          <Image
            source={{uri: `${post.item.mediaObject.url}`}}
            style={styles.image}
          />
          <Text style={styles.title}>{post.item.title}</Text>
          <Text style={styles.description}>{post.item.desc}</Text>
        </>
      </TouchableRipple>
    </CustomCard>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 215,
  },
  content: {
    paddingVertical: 10,
  },
  title: {paddingHorizontal: 12, paddingTop: 15, fontFamily: 'Roboto-Regular'},
  description: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    fontFamily: 'Roboto-Light',
  },
});
