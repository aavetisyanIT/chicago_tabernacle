import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useNavigationState} from '@react-navigation/native';

import DevotionalHeader from './components/devotional-header';
import DevotionalContent from './components/devotional-content';

const DevotionalTab = () => {
  //making use of useNavigation hook to retrive current acticle
  //It wasn't possible to pass it down as a prop(route.params)
  const routes = useNavigationState(state => state.routes);

  const {article} = routes[0].params;
  const {devoContent} = article;
  const PARAGRAPHSDATA = devoContent[0].paragraphs;

  const renderItem = props => <DevotionalContent {...props} />;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <DevotionalHeader
            headLine={devoContent[0].headline}
            imageUrl={devoContent[0].image.url}
          />
        }
        data={PARAGRAPHSDATA}
        renderItem={renderItem}
        keyExtractor={paragraph => paragraph.id}
      />
    </View>
  );
};

export default DevotionalTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
