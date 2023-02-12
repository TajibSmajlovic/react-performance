import { useContext } from 'react';
import {
  ActionsContext,
  StateContext,
  UserStateContext,
  UserActionContext,
} from './context';

export const useActions = () => {
  return useContext(ActionsContext);
};

export const usePosts = () => {
  const { posts } = useContext(StateContext);
  return posts;
};

export const useUsers = () => {
  const { users } = useContext(UserStateContext);
  return users;
};

export const useUsersActions = () => {
  return useContext(UserActionContext);
};
