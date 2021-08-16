import React from 'react';
import {View} from 'react-native';
import {Divider, Text} from 'react-native-paper';

export default function PrayerRequestScreen() {
  return (
    <View style={{flex: 1}}>
      <Divider />
      <Text>How Can We Pray For You</Text>
      <Text>
        If you have a prayer request, please submit it to us; we will pray for
        your request for thirty days at our prayer meetings, as will the
        Intercession Ministry. Prayer request cards are also available at the
        church office or at any of our weekly services.
      </Text>
      <Divider />
    </View>
  );
}
