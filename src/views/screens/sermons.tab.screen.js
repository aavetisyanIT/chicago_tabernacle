import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import articles from '../../assets/articles';
import SermonCard from '../components/sermon-card.component';

const data = articles;

const SermonsTab = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const renderSermon = sermon => {
    return <SermonCard sermon={sermon} navigation={navigation} />;
  };
  const imageUrl = data.items[0].image.url;
  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: `${imageUrl}`}} style={styles.image} />

        <FlatList
          ItemSeparatorComponent={() => <View style={{height: 1.5}} />}
          data={data.items}
          renderItem={renderSermon}
          keyExtractor={sermon => {
            return sermon.id;
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {}}
              colors={['#bc9665']}
            />
          }
        />
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
