import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

export default function NewsCard({data}) {
  return (
    <>
      <Card elevation={10} style={styles.card}>
        <Card.Cover
          source={{
            uri: `${data['items'][0]['mediaObject']['url']}`,
          }}
          style={styles.cover}
        />
        <Card.Content style={styles.content}>
          <Title style={styles.title}>{data['items'][0]['title']}</Title>
          <Paragraph style={styles.description}>
            {data['items'][0]['desc']}
          </Paragraph>
        </Card.Content>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {marginVertical: 12, backgroundColor: '#fff'},
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
