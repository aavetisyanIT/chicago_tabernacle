import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import HomeScreenTabBar from './home-screen-tab-bar.component';
import LazyPlaceholder from './lazy-placeholder.component';
import SermonsTab from './../screens/sermons.tab.screen';
import NewsTab from './../screens/news.tab.screen';

const FirstRoute = () => <NewsTab />;

const SecondRoute = () => <SermonsTab />;

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
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        renderTabBar={HomeScreenTabBar}
        lazy
        swipeEnabled
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        initialLayout={{width: Dimensions.get('window').width}}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
