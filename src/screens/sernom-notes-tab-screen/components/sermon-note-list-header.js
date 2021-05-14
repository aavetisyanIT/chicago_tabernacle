import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomAudioPlayer from './../../../custom-components/custom-audio-player';
import FastImage from 'react-native-fast-image';
import CustomButton from './../../../custom-components/custom-button';

const SermonNoteListHeader = ({article}) => {
  const [audioPlayerVisible, setAudioPlayerVisible] = React.useState(false);
  const showAudioPlayer = () => setAudioPlayerVisible(true);
  const hideAudioPlayer = () => setAudioPlayerVisible(false);
  return (
    <>
      <FastImage
        source={{
          uri: `${article.article.image.url}`,
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.headerContent}>
        <Text>{article.article.headline}</Text>
        <Text style={styles.description}>{article.article.desc}</Text>
        {/* CustomAudioPlayer is not working  */}
        {audioPlayerVisible ? (
          <CustomAudioPlayer />
        ) : (
          <CustomButton
            style={styles.audioButton}
            title="AUDIO PLAYER"
            textStyle={styles.audioButtonText}
            icon="volume-high-outline"
            iconSize={20}
            onPress={showAudioPlayer}
          />
        )}
      </View>
    </>
  );
};

export default SermonNoteListHeader;

const styles = StyleSheet.create({
  image: {height: 250, width: '100%'},
  headerContent: {padding: 13},
  description: {fontFamily: 'Roboto-Thin'},
  audioButton: {flexDirection: 'row', backgroundColor: '#fff', margin: 12},
  audioButtonText: {
    color: '#bc9665',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    marginHorizontal: 5,
  },
});
