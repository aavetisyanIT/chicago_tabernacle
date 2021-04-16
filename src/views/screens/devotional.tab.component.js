import React from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

const htmlContent = `
    <h2>
  <span style="color: rgb(0, 0, 0); background-color: transparent"
    >Jesus Will Build in the Context of Spiritual Opposition</span
  >
</h2>
<h2><br /></h2>
<h2>
  <span style="color: rgb(0, 0, 0); background-color: transparent"
    >Satan Will Oppose in the Context of Kingdom Progress</span
  >
</h2>
<style>
  * {
    font-family: Proxima Nova;
  }
  p,
  ul,
  li,
  ol {
    font-size: 16px;
  }
  em {
    font-style: italic;
  }
</style>

`;

const DevotionalTab = ({route}) => {
  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>Devotional Tab</Text>
      <HTML source={{html: htmlContent}} contentWidth={contentWidth} />
    </View>
  );
};

export default DevotionalTab;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  image: {height: 250, width: '100%'},
  headerContent: {padding: 13},
  headLine: {fontFamily: 'Roboto-Medium'},
  description: {fontFamily: 'Roboto-Thin'},
});
