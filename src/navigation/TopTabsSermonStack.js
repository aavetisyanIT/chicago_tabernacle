import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import LazyPlaceholder from './../screens/components/lazy-placeholder.component';
import DevotionalTab from '../screens/devotional-tab-screen/devotional.tab.screen';
import SermonTabBar from './../screens/components/sermon-tab-bar.component';
import SermonNotesTab from './../screens/sernom-notes-tab-screen/sermon-notes.tab.screen';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabsSermonStack = () => {
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
