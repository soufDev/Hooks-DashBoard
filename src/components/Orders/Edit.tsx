import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { State } from '../../interface/GlobalState';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { updateOrder } from '../../redux/actions/orders';

const mapState = (state: State) => ({
  isLoad: state.user.isLoad,
  error: state.user.isLoad,
  users: state.user.users
});
function Select(props: any) {
  return (
    <select name="assignee" id="assignee" value={props.value} onChange={props.onChange}>
      {props.users.map((user: any, index:number) => <option key={index} value={user.id}>{user.username}</option>)}
    </select>
  )
};

function Edit(props: any) {
  const { id } = props.match.params;
  const { users } = useMappedState(mapState);
  const dispatch = useDispatch();
  
  const [value, setValue] = useState<number>(Number(id));
  console.log({ value });
  const handleChange = (e: any) => {
    setValue(Number(e.target.value));
  }
  const onSubmit = () => {
    console.log(value);
    const path = `/api/orders/${value}`;
    const data = {
      assignee: value,
    }
    dispatch(updateOrder(path, data, props.history))
  }
  return (
    <>
      <h3>Edit Order</h3>
      <Select users={users} id={id} onChange={handleChange} value={value}/>
      <>
        <button onClick={onSubmit}>submit</button>
        <button onClick={() => props.history.push('/orders')}>cancel</button>
      </>
    </>
  )
}

export default withRouter(Edit);