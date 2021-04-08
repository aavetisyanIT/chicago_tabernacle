import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import NewsCard from '../components/news-card.component';

import announcementsData from './../../assets/announcementsData';

const data = announcementsData;

export default function NewsTab() {
  const renderNewsCard = post => {
    return <NewsCard post={post} />;
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
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
