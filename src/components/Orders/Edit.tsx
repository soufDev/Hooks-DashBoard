import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { State } from '../../interface/GlobalState';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { updateOrder } from '../../redux/actions/orders';
import { Order } from '../../interface/Order';
import { Form, Button, SelectInput, ControlForm } from '../../styledComponents/EditForm';

const mapState = (state: State) => ({
  isLoad: state.user.isLoad,
  error: state.user.isLoad,
  users: state.user.users,
  orders: state.order.orders,
});
function Select(props: any) {
  return (
    <SelectInput name="assignee" id="assignee" value={props.value} onChange={props.onChange}>
      {props.users.map((user: any, index:number) => <option key={index} value={user.id}>{user.username}</option>)}
    </SelectInput>
  )
};

function Edit(props: any) {
  const { id } = props.match.params;
  const { users, orders } = useMappedState(mapState);
  const dispatch = useDispatch();
  const order  = orders && orders.filter((order: Order) => order.assignee === Number(id))[0];
  const [value, setValue] = useState<number>(Number(id));
  const handleChange = (e: any) => {
    setValue(Number(e.target.value));
  }
  const onSubmit = () => {
    console.log(value);
    const path = `/api/orders/${order.id}`;
    const data = {
      assignee: value,
    }
    dispatch(updateOrder(path, data, props.history))
  }
  return (
    <Form>
      <h3>Edit Order</h3>
      <Select users={users} id={id} onChange={handleChange} value={value}/>
      <ControlForm>
        <Button onClick={onSubmit}>submit</Button>
        <Button onClick={() => props.history.push('/orders')}>cancel</Button>
      </ControlForm>
    </Form>
  )
}

export default withRouter(Edit);