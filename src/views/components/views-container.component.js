import React from 'react';
import styled from 'styled-components/native';
import CustomButton from './button.component';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  border: 1px solid green;
`;
const ViewsWrapper = styled.View`
  flex-direction: row;

  border: 1px solid lightblue;
`;

export default function ViewsContainer() {
  return (
    <Wrapper>
      <ViewsWrapper>
        <CustomButton text="What's new" />
        <CustomButton text="Sermons" />
      </ViewsWrapper>
    </Wrapper>
  );
}
