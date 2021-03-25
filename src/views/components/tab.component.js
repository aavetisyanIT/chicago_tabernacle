import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#f2f2f2'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#f2f2f2'}]} />
);

// This is our placeholder component for the tabs
// This will be rendered when a tab isn't loaded yet
// You could also customize it to render different content depending on the route
const LazyPlaceholder = ({route}) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);

const renderTabBar = props => (
  <TabBar
    {...props}
    style={styles.tabBar}
    indicatorStyle={{
      backgroundColor: '#bc9665',
      height: 2.5,
    }}
    renderLabel={({route}) => (
      <Text style={styles.tabBarText}>{route.title}</Text>
    )}
  />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: "WHAT'S NEW"},
      {key: 'second', title: 'SERMONS'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderLazyPlaceholder = ({route}) => <LazyPlaceholder route={route} />;

  render() {
    return (
      <TabView
        renderTabBar={renderTabBar}
        lazy
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        onIndexChange={this._handleIndexChange}
        initialLayout={{width: Dimensions.get('window').width}}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {backgroundColor: '#fff'},
  tabBarText: {color: '#c4c4c4'},
});
