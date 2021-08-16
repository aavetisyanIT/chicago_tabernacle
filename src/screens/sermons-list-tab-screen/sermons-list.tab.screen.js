import React from 'react';
import {FlatList, RefreshControl, View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import SermonCard from './components/sermon-card.component';
import {getAllArticles} from './../../utils/api';

const SermonsListTab = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false),
    // empty object(including id) in the initial state is needed for the first render
    // till useEffect runs and fetches the data from API
    [sermons, setSermons] = React.useState({
      items: [{image: {url: ''}, id: '1'}],
    });

  // Fetch all articles
  React.useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getAllArticles();
      setSermons(fetchedData.data);
    };
    fetchData();
  }, []);

  const renderSermon = sermon => {
    return <SermonCard sermon={sermon} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 1.5}} />}
        ListHeaderComponent={
          <>
            <FastImage
              source={{
                uri: `${sermons.items[0].image.url}`,
                priority: FastImage.priority.normal,
              }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.contain}
            />
          </>
        }
        ListHeaderComponentStyle={styles.imageContainer}
        data={sermons.items}
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
