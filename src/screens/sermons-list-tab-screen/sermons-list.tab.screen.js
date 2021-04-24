import React, {useState} from 'react';
import {FlatList, RefreshControl, View, StyleSheet, Image} from 'react-native';

import articles from '../../assets/articles';
import SermonCard from './components/sermon-card.component';

const data = articles;

const SermonsListTab = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const renderSermon = sermon => {
    return <SermonCard sermon={sermon} navigation={navigation} />;
  };
  const imageUrl = data.items[0].image.url;
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 1.5}} />}
        ListHeaderComponent={
          <>
            <Image source={{uri: `${imageUrl}`}} style={styles.image} />
          </>
        }
        ListHeaderComponentStyle={styles.imageContainer}
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
  );
};

export default SermonsListTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {width: '100%', height: 250},

  image: {flex: 1},
});