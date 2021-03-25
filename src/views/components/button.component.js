import React from 'react';
import {Button} from 'react-native-paper';

export default function CustomButton({text}) {
  return (
    <Button
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: 'yellow',
        borderStyle: 'solid',
      }}>
      {text}
    </Button>
  );
}
