import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import database from '@react-native-firebase/database';

import SermonNote from './components/sermon-note';
import SermonNoteListHeader from './components/sermon-note-list-header';
import CustomAddNoteModal from '../../custom-components/custom-add-note-modal';
import { AppContext } from '../../context/app.context';
import { actionTypes } from '../../context/action.types';

function SermonNotesTab({ route }) {
  const [{ isFullScreenVideo, user, userUid }, dispatch] =
    React.useContext(AppContext);
  const { article } = route.params;
  const PARAGRAPHDATA = article.paragraphs;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentSermonHTML, setCurrentSermonHTML] =
    React.useState('');
  const [editNoteText, setEditNoteText] = React.useState('');
  const flatListRef = React.useRef();
  const showModal = React.useCallback((noteText) => {
    if (noteText) {
      setEditNoteText(noteText);
    } else {
      setEditNoteText('empty note for test');
    }
    setModalVisible(true);
  }, []);

  const hideModal = () => setModalVisible(false);

  const renderItem = (props) => (
    <SermonNote
      {...props}
      showModal={showModal}
      setCurrentSermonHTML={setCurrentSermonHTML}
    />
  );

  React.useEffect(() => {
    if (user) {
      dispatch({
        type: actionTypes.SET_CURRENT_SERMON_ID,
        payload: article.id,
      });
      try {
        const userArticlesRef = database().ref(
          `/users/${userUid}/articles`,
        );
        userArticlesRef.child(article.id).update({ read: true });
      } catch (error) {
        console.log('SermonNotesTab useEffect');
        console.log('Error: ', error.message);
      }
    }
  }, []);

  // Fixes issue when fullscreen is clicked on scrolled screen
  React.useEffect(() => {
    if (isFullScreenVideo) {
      // moves to the top of the screen
      flatListRef.current.scrollToOffset({
        x: 0,
        y: 0,
        animated: true,
      });
    }
  }, [isFullScreenVideo]);

  return (
    <View style={styles.container}>
      <CustomAddNoteModal
        modalVisible={modalVisible}
        hideModal={hideModal}
        editNoteText={editNoteText}
        placeholder="Your Note"
        HTML={currentSermonHTML}
        articleType="sermon"
      />
      <FlatList
        ListHeaderComponent={
          <SermonNoteListHeader article={article} />
        }
        ref={flatListRef}
        data={PARAGRAPHDATA}
        renderItem={renderItem}
        scrollEnabled={!isFullScreenVideo}
        keyExtractor={(item) => item.id}
        style={!isFullScreenVideo && styles.flatList}
      />
    </View>
  );
}

export default SermonNotesTab;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  flatList: { marginBottom: 15 },
});
