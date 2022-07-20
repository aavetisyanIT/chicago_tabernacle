import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import SermonNote from './components/sermon-note';
import SermonNoteListHeader from './components/sermon-note-list-header';
import CustomAddNoteModal from './../../custom-components/custom-add-note-modal';
import {AppContext} from './../../context/app.context';
import {actionTypes} from './../../context/action.types';

const SermonNotesTab = ({route}) => {
  const [state, dispatch] = React.useContext(AppContext),
    {isFullScreenVideo} = state,
    {article} = route.params,
    PARAGRAPHDATA = article.paragraphs,
    [modalVisible, setModalVisible] = React.useState(false),
    [currentSermonHTML, setCurrentSermonHTML] = React.useState(''),
    flatListRef = React.useRef(),
    showModal = () => setModalVisible(true),
    hideModal = () => setModalVisible(false),
    renderItem = props => (
      <SermonNote
        {...props}
        showModal={showModal}
        setCurrentSermonHTML={setCurrentSermonHTML}
      />
    );

  React.useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_SERMON_ID,
      payload: article.id,
    });
  }, []);

  // Fixes issue when fullscreen is clicked on scrolled screen
  React.useEffect(() => {
    if (isFullScreenVideo) {
      //moves to the top of the screen
      flatListRef.current.scrollToOffset({x: 0, y: 0, animated: true});
    }
  }, [isFullScreenVideo]);

  return (
    <View style={styles.container}>
      <CustomAddNoteModal
        modalVisible={modalVisible}
        hideModal={hideModal}
        placeholder="Your Note"
        HTML={currentSermonHTML}
        articleType="sermon"
      />
      <FlatList
        ListHeaderComponent={<SermonNoteListHeader article={article} />}
        ref={flatListRef}
        data={PARAGRAPHDATA}
        renderItem={renderItem}
        scrollEnabled={isFullScreenVideo ? false : true}
        keyExtractor={item => item.id}
        style={!isFullScreenVideo && styles.flatList}
      />
    </View>
  );
};

export default SermonNotesTab;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  flatList: {marginBottom: 15},
});
