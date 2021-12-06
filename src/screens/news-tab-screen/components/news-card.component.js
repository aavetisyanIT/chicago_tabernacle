import React from 'react';
import {Linking, StyleSheet, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import CustomCard from '../../../custom-components/custom-card';
import {getAllArticles} from './../../../utils/api';

const NewsCard = ({announcement, navigation, announcementData}) => {
  const [articles, setArticles] = React.useState({});

  //Fetch all articles
  React.useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getAllArticles();
      setArticles(fetchedData.data);
    };
    fetchData();
  }, []);

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
        navigation.navigate('CustomPushScreensStack', {
          screen: 'Devotional',
          params: {
            article: currentArticle,
          },
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
          <FastImage
            source={{
              uri: `${announcement.item.mediaObject.url}`,
              priority: FastImage.priority.normal,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{announcement.item.title}</Text>
          <Text style={styles.description}>{announcement.item.desc}</Text>
        </>
      </TouchableRipple>
    </CustomCard>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 220,
    width: null,
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
