import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { State } from '../../interface/GlobalState';

const mapState = (state: State) => ({
  error: state.user.error,
  users: state.user.users
});

function Assignee({id} : {id: number}) {
  const { error, users } = useMappedState(mapState);
  const user = users && users.filter((user: any) => user.id === id)[0] || null;
  return (
    <>
      {error && <p>error</p> || <>{user && user.username || 'NOT ASSIGNED'}</>}
    </>
  )
}

export default Assignee;