import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

const SermonNoteParagraphText = ({PARAGRAPHHTML}) => {
  const contentWidth = useWindowDimensions().width;
  return (
    <View>
      <HTML source={{html: PARAGRAPHHTML}} contentWidth={contentWidth} />
    </View>
  );
};

export default SermonNoteParagraphText;
