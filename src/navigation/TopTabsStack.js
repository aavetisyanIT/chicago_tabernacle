import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import NewsTab from './../views/screens/news.tab.screen';
import SermonsTab from './../views/screens/sermons.tab.screen';
import HomeScreenTabBar from './../views/components/home-screen-tab-bar.component';
import LazyPlaceholder from './../views/components/lazy-placeholder.component';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabsStack = () => {
  return (
    <Navigator tabBar={props => <HomeScreenTabBar {...props} />}>
      <Screen
        name="News"
        component={NewsTab}
        options={{
          title: "What's new",
        }}
        lazy
        lazyPlaceholder={() => <LazyPlaceholder />}
      />
      <Screen
        name="Sermons"
        component={SermonsTab}
        lazy
        lazyPlaceholder={() => <LazyPlaceholder />}
      />
    </Navigator>
  );
};

export default TopTabsStack;
