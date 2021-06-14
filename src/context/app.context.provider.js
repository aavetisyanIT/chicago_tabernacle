import React, {useReducer} from 'react';

import {AppContext} from './app.context';
import {initialState, reducer} from './app.context.reducer';

export const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
