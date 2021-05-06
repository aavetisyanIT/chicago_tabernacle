import React from 'react';
import {useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

const DevotionalParagraphText = ({itemText}) => {
  const contentWidth = useWindowDimensions().width;

  return <HTML source={{html: itemText}} contentWidth={contentWidth} />;
};

export default DevotionalParagraphText;
