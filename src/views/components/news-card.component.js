import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

export default function NewsCard({post}) {
  return (
    <>
      <Card elevation={10} style={styles.card} onPress={null}>
        <Card.Cover
          source={{
            uri: `${post.item.mediaObject.url}`,
          }}
          style={styles.cover}
        />
        <Card.Content style={styles.content}>
          <Title style={styles.title}>{post.item.title}</Title>
          <Paragraph style={styles.description}>{post.item.desc}</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {margin: 12, backgroundColor: '#fff'},
  cover: {
    height: 215,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: 10,
  },
  title: {paddingBottom: 0, marginBottom: 0, fontFamily: 'Roboto-Regular'},
  description: {paddingTop: 0, marginTop: 0, fontFamily: 'Roboto-Light'},
});
