import React from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import { useMappedState, useDispatch } from "redux-react-hook";
import { useEffect } from "react";
import { FETCH_ORDERS, FETCH_USERS } from "../../const";
import { ContentTable, Table, Th } from "../../styledComponents";
import { Order } from "../../interface/Order";
import { State } from "../../interface/GlobalState";
import Assignee from "../Assignee";
import AuthService from '../../Auth';

const mapState = (state: State) => ({
  isLoad: state.order.isLoad,
  error: state.order.error,
  orders: state.order.orders,
})

function Orders(props: RouteComponentProps<{ history?: string; }>) {
  const { history } = props;
  const { isLoad, error, orders } = useMappedState(mapState);
  if (error) throw error;
  return (
    <ContentTable>
      {isLoad && <h1>Loading ...</h1> || <Table>
        <tbody>
          <tr>
            <Th>id</Th>
            <Th>Origin</Th>
            <Th>Destination</Th>
            <Th>Assignee</Th>
            <Th>Status</Th>
            <Th />
          </tr>
          {orders && orders.map((order: Order, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.origin}</td>
              <td>{order.destination}</td>
              <td><Assignee id={order.assignee}/></td>
              <td>{order.status}</td>
              <td>
                <button
                  disabled={order.status === 'DELIVERED'} 
                  onClick={() => history.push(`/order/edit/${order.assignee}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody> 
      </Table>}
    </ContentTable>
  )
}

export default withRouter(Orders);