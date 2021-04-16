import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

export default function SermonNotesParagraph({item}) {
  const PARAGRAPHHTML = item.text;

  const contentWidth = useWindowDimensions().width;
  return (
    <>
      <Text>
        <HTML source={{html: PARAGRAPHHTML}} contentWidth={contentWidth} />;
      </Text>
    </>
  );
}
