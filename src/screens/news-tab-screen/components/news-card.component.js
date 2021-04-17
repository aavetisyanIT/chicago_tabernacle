import React from 'react';
import {Image, Linking, StyleSheet, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import articles from './../../../assets/articles';
import CustomCard from './custom-card.component';

export default function NewsCard({announcement, navigation, announcementData}) {
  const findArticleByAnnouncementObjectId = (announcementData, articles) => {
    let articleId = announcementData.id;
    let foundArticle = null;
    if (announcementData.type === 'devo') {
      return (foundArticle = articles.items.find(
        article => article.devoContent[0].id === articleId,
      ));
    } else if (announcementData.type === 'article') {
      return (foundArticle = articles.items.find(
        article => article.id === articleId,
      ));
    }
  };

  const handlePress = () => {
    const currentArticle = findArticleByAnnouncementObjectId(
      announcementData,
      articles,
    );
    switch (announcementData.type) {
      case 'link':
        Linking.openURL(announcement.item.ref.link);
        break;
      case 'devo':
        navigation.navigate('Devotional', {
          article: currentArticle,
        });
        break;
      case 'article':
        navigation.navigate('TopTabsSermonStack', {
          screen: 'SERMON NOTES',
          params: {
            article: currentArticle,
          },
        });
        break;
    }
  };
  return (
    <CustomCard>
      <TouchableRipple
        borderless={true}
        centered={true}
        onPress={handlePress}
        rippleColor="rgba(0, 0, 0, .32)">
        <>
          <Image
            source={{uri: `${announcement.item.mediaObject.url}`}}
            style={styles.image}
          />
          <Text style={styles.title}>{announcement.item.title}</Text>
          <Text style={styles.description}>{announcement.item.desc}</Text>
        </>
      </TouchableRipple>
    </CustomCard>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 215,
  },
  content: {
    paddingVertical: 10,
  },
  title: {paddingHorizontal: 12, paddingTop: 15, fontFamily: 'Roboto-Regular'},
  description: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    fontFamily: 'Roboto-Light',
  },
});
