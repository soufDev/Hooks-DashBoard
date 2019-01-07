import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { State } from '../../interface/GlobalState';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { Order } from '../../interface/Order';
import { updateParcel } from '../../redux/actions/orders';
import { Form, Button } from '../../styledComponents';
import { SelectInput, ControlForm } from '../../styledComponents/EditForm';


const mapState = (state: State) => ({
  isLoad: state.order.isLoad,
  error: state.order.error,
  orders: state.order.orders,
});
function Edit(props: RouteComponentProps<{ id: string }>) {
  const { id } = props.match.params;
  const { isLoad, error, orders } = useMappedState(mapState);
  const dispatch = useDispatch();
  const order = orders.filter((order: Order) => order.id === Number(id))[0];  
  const [status, setStatus] = useState(order && order.status || '');
  
  const handleChange = (event: any) => {
    setStatus(event.target.value);
  }
  const onSubmit = () => {
    const path = `/api/orders/${id}`;
    if (status === 'PICKED_UP') {
      const data = {
        status,
        pickedup_at: Date.now(),
        delivered_at: 0,
      }
      // dispatch call api with timestamps
      dispatch(updateParcel(path, data, props.history))
    } else if (status === 'DELIVERED') {
      const data = {
        status,
        delivered_at: Date.now(),
      }
      dispatch(updateParcel(path, data, props.history));
    } else {
      const data = { status }
      // dispatch call api without timestamps
      dispatch(updateParcel(path, data, props.history));
    }
  }
  if (error) throw error;
  return (
    <>
      {isLoad && <h1>Loading...</h1> || 
        <Form>
           <h3>Edit Parcel</h3>
          <SelectInput name="status" id="status" value={status} onChange={handleChange}>
            <option value="PICKED_UP">PICKED_UP</option>
            <option value="ASSIGNED" >ASSIGNED</option>
            <option value="DELIVERED">DELIVERED</option>
          </SelectInput>
          <ControlForm>
            <Button onClick={onSubmit}>Submit</Button>
            <Button onClick={() => props.history.push('/orders')}>Cancel</Button>
          </ControlForm>
        </Form>
      }
    </>
  )
}


export default withRouter(Edit);