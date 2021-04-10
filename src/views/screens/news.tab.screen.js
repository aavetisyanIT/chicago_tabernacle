import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import NewsCard from '../components/news-card.component';

import announcementsData from './../../assets/announcementsData';

const data = announcementsData;

const NewsTab = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const renderNewsCard = post => {
    return <NewsCard post={post} navigation={navigation} />;
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{height: 8}} />}
          data={data.items}
          renderItem={renderNewsCard}
          keyExtractor={post => {
            return post.id;
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
