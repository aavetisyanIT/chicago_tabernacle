import React from 'react';
import {FlatList, Text, View, StyleSheet, Image} from 'react-native';
import articles from '../../assets/articles';
import SermonCard from '../components/sermon-card.component';

const data = articles;

const SermonsTab = () => {
  const imageUrl = data.items[0].image.url;
  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: `${imageUrl}`}} style={styles.image} />
        <SermonCard />
        {/* <FlatList>Sermonsss</FlatList> */}
      </View>
    </>
  );
};

export default SermonsTab;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
  },
  image: {height: '45%', width: '100%', resizeMode: 'cover'},
});
