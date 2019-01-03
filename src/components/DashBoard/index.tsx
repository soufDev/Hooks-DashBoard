import React, { lazy } from 'react';
import { Route } from 'react-router';
import Header from '../Header';
import ProtectedRoute from '../ProtectedRoute';


// using Lazy to import the component with lazy loading mode
const Home = lazy(() => import('../Home'));
const Orders = lazy(() => import('../Orders'));
const Bikers = lazy(() => import('../Bikers'));

export default function DashBoard() {
  return (
      <>
        <Header />
        <ProtectedRoute path='/orders' component={Orders} />
        <ProtectedRoute path='/home' component={Home} />
        <ProtectedRoute path='/bikers' component={Bikers} />
      </>
  )
}