import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import LazyPlaceholder from './../views/components/lazy-placeholder.component';
import SermonNotesTab from './../views/screens/sermon-notes.tab.components';
import DevotionalTab from './../views/screens/devotional.tab.component';
import SermonTabBar from './../views/components/sermon-tab-bar.component';
import SideMenuButton from './../views/components/side-menu-button';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabsSermonStack = ({navigation}) => {
  return (
    <Navigator tabBar={props => <SermonTabBar {...props} />}>
      <Screen
        name="SERMON NOTES"
        component={SermonNotesTab}
        lazy
        lazyPlaceholder={() => <LazyPlaceholder />}
      />
      <Screen
        name="DEVOTIONAL"
        component={DevotionalTab}
        lazy
        lazyPlaceholder={() => <LazyPlaceholder />}
      />
    </Navigator>
  );
};

export default TopTabsSermonStack;
