import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SermonsListTab from '../views/sermons-list-tab-screen/sermons-list.tab.screen';
import HomeScreenTabBar from './../views/components/home-screen-tab-bar.component';
import LazyPlaceholder from './../views/components/lazy-placeholder.component';
import NewsTab from './../views/news-tab-screen/news.tab.screen';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabsStack = () => {
  return (
    <Navigator tabBar={props => <HomeScreenTabBar {...props} />}>
      <Screen
        name="WHAT'S NEW"
        component={NewsTab}
        lazy
        lazyPlaceholder={() => <LazyPlaceholder />}
      />
      <Screen
        name="SERMONS"
        component={SermonsListTab}
        lazy
        lazyPlaceholder={() => <LazyPlaceholder />}
      />
    </Navigator>
  );
};

export default TopTabsStack;
