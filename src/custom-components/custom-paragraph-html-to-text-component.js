import React from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

const CustomParagraphHtmlToText = ({paragraphHtml}) => {
  const contentWidth = useWindowDimensions().width;
  //create custom element to replace sup tag
  const renderers = {
    sup: (htmlAttribs, children, convertedCSSStyles, passProps) => {
      const supTagText = passProps.domNode.children[0].data;
      return (
        <View
          style={styles.supContainer}
          key={passProps.key}
          html={htmlAttribs}>
          <Text style={styles.supText}>{supTagText} </Text>
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

const styles = StyleSheet.create({
  supContainer: {flexDirection: 'row', alignItems: 'flex-start'},
  supText: {
    fontSize: 11,
    lineHeight: 14,
    textAlignVertical: 'top',
  },
});
