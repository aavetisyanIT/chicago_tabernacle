import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {getAllArticles} from '../../utils/api';

import announcementsData from './../../assets/announcementsData';
import NewsCard from './components/news-card.component';

const data = announcementsData;

const NewsTab = ({navigation}) => {
  // Test fetching articles
  // console.log('---------------------------');
  // const testData = getAllArticles();
  // testData.then(res => {
  //   console.log(res.data.items[1]);
  // });
  // promise is returned when data is expected

  const [refreshing, setRefreshing] = useState(false);
  const renderNewsCard = announcement => {
    let announcementData = null;
    switch (announcement.item.type) {
      case 'devo':
        announcementData = {
          type: 'devo',
          id: announcement.item.ref.objectId,
        };
        break;
      case 'article':
        announcementData = {
          type: 'article',
          id: announcement.item.ref.objectId,
        };
        break;
      case 'link':
        announcementData = {type: 'link', id: null};
        break;
    }

    return (
      <NewsCard
        announcement={announcement}
        announcementData={announcementData}
        navigation={navigation}
      />
    );
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{height: 8}} />}
          data={data.items}
          renderItem={renderNewsCard}
          keyExtractor={announcement => {
            return announcement.id;
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

export default NewsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
