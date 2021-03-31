import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import announcementsData from './../../assets/announcementsData';

export default function NewsTab() {
  return (
    <>
      <View style={styles.container}>
        <Card elevation={10} style={styles.card}>
          <Card.Cover
            source={{
              uri:
                'https://chitab.org/wp-content/uploads/2021/03/palm-sunday-2021brand.png',
            }}
            style={styles.cover}
          />
          <Card.Content style={styles.content}>
            <Title style={styles.title}>Card title</Title>
            <Paragraph style={styles.description}>Card content</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },

  card: {backgroundColor: '#fff'},
  cover: {
    height: 220,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: 10,
  },
  title: {paddingBottom: 0, marginBottom: 0, fontFamily: 'Roboto-Regular'},
  description: {paddingTop: 0, marginTop: 0, fontFamily: 'Roboto-Light'},
});
