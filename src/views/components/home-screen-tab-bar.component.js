import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TabBar} from 'react-native-tab-view';

const HomeScreenTabBar = props => {
  return (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={{
        backgroundColor: '#bc9665',
        height: 2.5,
      }}
      renderLabel={({route}) => {
        const tabLabel = route.name === 'News' ? "What's new" : 'Sermons';
        return <Text style={styles.tabBarText}>{tabLabel}</Text>;
      }}
    />
  );
};
export default HomeScreenTabBar;

const styles = StyleSheet.create({
  tabBar: {backgroundColor: '#fff'},
  tabBarText: {color: '#c4c4c4'},
});
