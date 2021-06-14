import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import SermonNote from './components/sermon-note';
import SermonNoteListHeader from './components/sermon-note-list-header';
import CustomAddNoteModal from './../../custom-components/custom-add-note-modal';
import {AppContext} from './../../context/app.context';

const SermonNotesTab = ({route}) => {
  const [state] = React.useContext(AppContext);
  const {isFullScreenVideo} = state;

  const {article} = route.params;
  const PARAGRAPHDATA = article.paragraphs;

  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentSermonHTML, setCurrentSermonHTML] = React.useState('');

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const renderItem = props => (
    <SermonNote
      {...props}
      showModal={showModal}
      setCurrentSermonHTML={setCurrentSermonHTML}
    />
  );

  return (
    <View style={styles.container}>
      <CustomAddNoteModal
        modalVisible={modalVisible}
        hideModal={hideModal}
        placeholder="Your Note"
        HTML={currentSermonHTML}
      />
      <FlatList
        ListHeaderComponent={<SermonNoteListHeader article={article} />}
        data={PARAGRAPHDATA}
        renderItem={renderItem}
        scrollEnabled={isFullScreenVideo ? false : true}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SermonNotesTab;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
