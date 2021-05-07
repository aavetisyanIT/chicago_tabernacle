import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useNavigationState} from '@react-navigation/native';

import DevotionalHeader from './components/devotional-header';
import DevotionalContent from './components/devotional-content';
import CustomAddNoteModal from '../../custom-components/custom-add-note-modal';

const DevotionalTab = () => {
  //making use of useNavigation hook to retrive current acticle
  //It wasn't possible to pass it down as a prop(route.params)
  const routes = useNavigationState(state => state.routes);

  const {article} = routes[0].params;
  const {devoContent} = article;
  const PARAGRAPHSDATA = devoContent[0].paragraphs;

  const [modalVisible, setModalVisible] = React.useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const renderItem = props => (
    <DevotionalContent {...props} showModal={showModal} />
  );

  return (
    <View style={styles.container}>
      <CustomAddNoteModal
        modalVisible={modalVisible}
        hideModal={hideModal}
        placeholder="Your Note"
      />
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
