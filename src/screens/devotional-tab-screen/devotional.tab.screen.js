import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import database from '@react-native-firebase/database';

import DevotionalHeader from './components/devotional-header';
import DevotionalContent from './components/devotional-content';
import CustomAddNoteModal from '../../custom-components/custom-add-note-modal';
import { AppContext } from '../../context/app.context';
import { actionTypes } from '../../context/action.types';

function DevotionalTab() {
  // making use of useNavigation hook to retrive current acticle
  // It wasn't possible to pass it down as a prop(route.params)
  const routes = useNavigationState((state) => state.routes);

  const { article } = routes[0].params;
  const { devoContent } = article;
  const PARAGRAPHSDATA = devoContent[0].paragraphs;

  const [{ user, userUid }, dispatch] = React.useContext(AppContext);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentParagraphHTML, setCurrentParagraphHTML] =
    React.useState('');

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  React.useEffect(() => {
    if (user) {
      dispatch({
        type: actionTypes.SET_CURRENT_DEVOTIONAL_ID,
        payload: devoContent[0].id,
      });
      try {
        const userArticlesRef = database().ref(
          `/users/${userUid}/articles`,
        );
        userArticlesRef
          .child(devoContent[0].id)
          .update({ read: true });
      } catch (error) {
        console.log('DevotionalTab useEffect');
        console.log('Error: ', error.message);
      }
    }
  }, [devoContent, dispatch, user, userUid]);

  const renderItem = (props) => (
    <DevotionalContent
      {...props}
      showModal={showModal}
      setCurrentParagraphHTML={setCurrentParagraphHTML}
    />
  );

  return (
    <View style={styles.container}>
      <CustomAddNoteModal
        modalVisible={modalVisible}
        hideModal={hideModal}
        placeholder="Your Note"
        HTML={currentParagraphHTML}
        articleType="devotional"
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
        keyExtractor={(paragraph) => paragraph.id}
        style={styles.flatList}
      />
    </View>
  );
}

export default DevotionalTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: { marginBottom: 15 },
});
