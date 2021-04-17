import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DevotionalTab from '../screens/devotional-tab-screen/devotional.tab.screen';
import SermonNotesTab from './../screens/sernom-notes-tab-screen/sermon-notes.tab.screen';
import SermonTabBar from './components/sermon-tab-bar.component';
import LazyPlaceholder from './components/lazy-placeholder.component';

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
