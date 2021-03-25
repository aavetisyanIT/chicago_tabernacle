import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './../views/screens/home.screen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {
        fontFamily: 'Roboto-Light',
        alignSelf: 'center',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'CHICAGO TABERNCLE'}}
    />
    <HomeStack.Screen
      name="PrayerRequest"
      component={PrayerRequestScreen}
      options={{title: 'Prayer Request'}}
    />
  </HomeStack.Navigator>;
};

export default HomeStackScreen;
