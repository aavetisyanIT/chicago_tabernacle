import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: ${props => props.theme.sizes[1]};
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.heading};
};
`;

export default function FrontScreen() {
  return (
    <View>
      <Title>Chicago Tabernacle</Title>
    </View>
  );
}
