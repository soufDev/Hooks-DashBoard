import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import { State } from '../../interface/GlobalState';


function Assignee({id} : {id: number}) {
  const mapState = useCallback((state: State) => ({
    error: state.user.error,
    users: state.user.users,
    user: state.user.users && state.user.users.filter((user: any) => user.id === id)[0] || null
  }), [id]);
  const { error, user } = useMappedState(mapState);
  return (
    <>
      {error && <p>error</p> || <>{user && user.username || 'NOT ASSIGNED'}</>}
    </>
  )
}

export default Assignee;