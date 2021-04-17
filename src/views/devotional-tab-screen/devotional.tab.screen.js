import React from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

const DevotionalTab = ({route}) => {
  const data = `<p><sup>13</sup>When Jesus came to the region of Caesarea Philippi, he asked his disciples,&nbsp;"Who do people say the Son of Man is?" <sup>14</sup>They replied, "Some say John the Baptist;&nbsp;others say Elijah; and still others, Jeremiah or one of the prophets." <sup>15</sup>"But what about you?"&nbsp;he asked.&nbsp;"Who do you say I am?" <sup>16</sup>Simon Peter answered, "You are the Messiah, the Son of the living God." <sup>17</sup>Jesus replied,&nbsp;"Blessed are you, Simon son of Jonah, for this was not revealed to you by flesh and blood,&nbsp;but by my Father in heaven.&nbsp;<sup>18</sup>And I tell you that you are Peter,&nbsp;and on this rock I will build my church,&nbsp;and the gates of Hades&nbsp;will not overcome it.</p><p>- Matthew 16:13-18 (NIV)</p><style>* { font-family: Proxima Nova; } p, ul, li, ol { font-size: 16px; } em { font-style: italic; }</style>`;
  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>Devotional Tab</Text>
      <HTML source={{html: data}} contentWidth={contentWidth} />
    </View>
  );
};

export default DevotionalTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headLine: {fontFamily: 'Roboto-Medium'},
});
