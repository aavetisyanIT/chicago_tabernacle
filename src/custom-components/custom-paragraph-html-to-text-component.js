import React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import HTML from 'react-native-render-html';

const CustomParagraphHtmlToText = ({paragraphHtml}) => {
  const contentWidth = useWindowDimensions().width;
  //create custom element to replace sup tag
  const renderers = {
    sup: (htmlAttribs, children, convertedCSSStyles, passProps) => {
      const supTagText = passProps.domNode.children[0].data;
      return (
        <View style={null} key={passProps.key} html={htmlAttribs}>
          <Text
            style={{
              fontSize: 11,
              lineHeight: 14,
              textAlignVertical: 'top',
            }}>
            {supTagText}{' '}
          </Text>
        </View>
      );
    },
  };

  return (
    <View>
      <HTML
        source={{
          html: paragraphHtml,
        }}
        contentWidth={contentWidth}
        renderers={renderers}
      />
    </View>
  );
};

export default CustomParagraphHtmlToText;
