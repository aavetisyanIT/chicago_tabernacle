import React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import HTML from 'react-native-render-html';

const SermonNoteParagraphText = ({PARAGRAPHHTML}) => {
  const contentWidth = useWindowDimensions().width;

  const renderers = {
    sup: ({__rawHtml}, children, convertedCSSStyles, passProps) => {
      return <Text style={null} key={passProps.key} html={__rawHtml} />;
    },
  };

  return (
    <View>
      <HTML
        source={{
          html: PARAGRAPHHTML,
        }}
        contentWidth={contentWidth}
        renderers={renderers}
      />
    </View>
  );
};

export default SermonNoteParagraphText;
