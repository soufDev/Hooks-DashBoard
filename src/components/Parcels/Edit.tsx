import React, { useEffect, useState, useCallback } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { State } from '../../interface/GlobalState';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { Order } from '../../interface/Order';
import { UPDATE_PARCEL } from '../../const';
import { updateParcel } from '../../redux/actions/orders';


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
    <>{isLoad && <h1>Loading...</h1> || <>
      <h3>Edit Parcel</h3>
      <select name="status" id="status" value={status} onChange={handleChange}>
        <option value="PICKED_UP">PICKED_UP</option>
        <option value="ASSIGNED" >ASSIGNED</option>
        <option value="DELIVERED">DELIVERED</option>
      </select>
      <>
        <button onClick={onSubmit}>Submit</button>
        <button><Link to={'/orders'}>Cancel</Link></button>
      </>
    </>}</>
  )
}


export default withRouter(Edit);