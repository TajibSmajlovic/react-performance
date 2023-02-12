import { bindActionCreators } from '@reduxjs/toolkit';
import { createContext, useMemo, useReducer } from 'react';
import { postActions, postsReducer } from './features/posts';
import { userActions, usersReducer } from './features/users';

import postData from './api/posts.json';
import userData from './api/users.json';

export const StateContext = createContext({});
export const ActionsContext = createContext({});

export const Provider = ({ children }) => {
  const [posts, postDispatch] = useReducer(postsReducer, postData);

  const actions = useMemo(
    () => ({
      ...bindActionCreators(postActions, postDispatch),
    }),
    [],
  );

  return (
    <ActionsContext.Provider value={actions}>
      <StateContext.Provider value={{ posts }}>
        {children}
      </StateContext.Provider>
    </ActionsContext.Provider>
  );
};

export const UserStateContext = createContext({});
export const UserActionContext = createContext({});

export const UserProvider = ({ children }) => {
  const [users, userDispatch] = useReducer(usersReducer, userData);

  const actions = useMemo(
    () => ({
      ...bindActionCreators(userActions, userDispatch),
    }),
    [],
  );

  return (
    <UserActionContext.Provider value={actions}>
      <UserStateContext.Provider value={{ users }}>
        {children}
      </UserStateContext.Provider>
    </UserActionContext.Provider>
  );
};
