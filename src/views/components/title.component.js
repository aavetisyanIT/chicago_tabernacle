import React from 'react';
import styled from 'styled-components/native';

const Header = styled.Text`
  padding: ${props => props.theme.sizes[1]};
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.sizes[2]};
};
`;

export default function Title() {
  return <Header>Chicago Tabernacle</Header>;
}
