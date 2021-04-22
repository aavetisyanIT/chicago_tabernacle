import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import AddNoteModal from './components/add-note-modal';

import SermonNote from './components/sermon-note';
import SermonNoteListHeader from './components/sermon-note-list-header';

const SermonNotesTab = ({route}) => {
  const {article} = route.params;
  const PARAGRAPHDATA = article.paragraphs;

  const [modalVisible, setModalVisible] = React.useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const renderItem = props => <SermonNote {...props} showModal={showModal} />;

  return (
    <View style={styles.container}>
      <AddNoteModal modalVisible={modalVisible} hideModal={hideModal} />
      <FlatList
        ListHeaderComponent={<SermonNoteListHeader article={route.params} />}
        data={PARAGRAPHDATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SermonNotesTab;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
