import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { State } from '../../interface/GlobalState';
import { useMappedState } from 'redux-react-hook';
import { ContentTable, Table, Th } from '../../styledComponents';
import { Order } from '../../interface/Order';

const mapState = (state: State) => ({
  orders: state.order.orders,
  error: state.order.error,
  isLoad: state.order.isLoad,
});

function Parcels(props: RouteComponentProps<{ history?: string }> & {id?: number; username?: string}) {
  const { orders, error , isLoad } = useMappedState(mapState);
  if (error) throw error;
  return (
    <ContentTable>
      {isLoad && <h1>Loading ...</h1> || <Table>
        <tbody>
          <tr>
            <Th>id</Th>
            <Th>Origin</Th>
            <Th>Destination</Th>
            <Th>Status</Th>
            <Th />
          </tr>
          {orders && orders.map((order: Order, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.origin}</td>
              <td>{order.destination}</td>
              <td>{order.status}</td>
              <td>
                <button 
                  disabled={order.status === 'DELIVERED'} 
                  onClick={() => props.history.push(`parcel/edit/${order.id}`)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody> 
      </Table>}
    </ContentTable>
  );
}

export default withRouter(Parcels);