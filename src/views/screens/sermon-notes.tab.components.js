import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const SermonNotesTab = ({route}) => {
  const {article} = route.params;
  const imageUrl = article.image.url;
  return (
    <View style={styles.container}>
      <Image source={{uri: `${imageUrl}`}} style={styles.image} />
      <View style={styles.headerContent}>
        <Text style={styles.headLine}>{article.headline}</Text>
        <Text style={styles.description}>{article.desc}</Text>
      </View>
    </View>
  );
};

export default SermonNotesTab;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  image: {height: 250, width: '100%'},
  headerContent: {padding: 13},
  headLine: {fontFamily: 'Roboto-Medium'},
  description: {fontFamily: 'Roboto-Thin'},
});
