import React from 'react';

import {AppContext} from './app.context';
import {initialState, reducer} from './app.context.reducer';

export const AppContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
