import React from 'react';
import AuthService from '../../Auth';
import Orders from './Orders';
import Parcels from '../Parcels';




export default function Home() {
  const { role, id }  = AuthService.getProfile();
  if (role === 'ROLE_ADMIN') {
    return <Orders />
  }
  return <Parcels id={id} />
}