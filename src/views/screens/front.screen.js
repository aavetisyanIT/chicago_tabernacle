import React from 'react';
import styled from 'styled-components/native';
import Title from '../components/title.component';
import ViewsContainer from '../components/views-container.component';

const ScreenContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export default function FrontScreen() {
  return (
    <ScreenContainer>
      <Title />
      <ViewsContainer />
    </ScreenContainer>
  );
}
