import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useNavigationState} from '@react-navigation/native';

import DevotionalHeader from './components/devotional-header';
import DevotionalContent from './components/devotional-content';
import CustomAddNoteModal from '../../custom-components/custom-add-note-modal';
import {AppContext} from './../../context/app.context';
import {actionTypes} from './../../context/action.types';

const DevotionalTab = () => {
  //making use of useNavigation hook to retrive current acticle
  //It wasn't possible to pass it down as a prop(route.params)
  const routes = useNavigationState(state => state.routes);

  const {article} = routes[0].params;
  const {devoContent} = article;
  const PARAGRAPHSDATA = devoContent[0].paragraphs;

  const [state, dispatch] = React.useContext(AppContext);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentParagraphHTML, setCurrentParagraphHTML] = React.useState('');

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  React.useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_ARTICLE_ID,
      payload: devoContent[0].id,
    });
  }, []);

  const renderItem = props => (
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
        style={styles.flatList}
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
  flatList: {marginBottom: 15},
});
