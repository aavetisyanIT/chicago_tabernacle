import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import HomeScreenTabBar from './home-screen-tab-bar.component';
import LazyPlaceholder from './lazy-placeholder.component';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#f2f2f2'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#f2f2f2'}]} />
);

export default class TabComponent extends React.Component {
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
        renderTabBar={HomeScreenTabBar}
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
  container: {},
});
