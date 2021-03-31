import React from 'react';
import {StyleSheet, View} from 'react-native';
import NewsCard from '../components/news-card.component';

import announcementsData from './../../assets/announcementsData';

const data = announcementsData;

export default function NewsTab() {
  return (
    <>
      <View style={styles.container}>
        <NewsCard data={data} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#f2f2f2',
  },
});
