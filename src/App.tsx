import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import ErrorBoundary, { FallbackProps } from 'react-error-boundary';
import LoginRoute from './components/LoginRoute';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';

// using Lazy to import the component with lazy loading mode
const Home = lazy(() => import('./components/Home'));
const Orders = lazy(() => import('./components/Orders'));
const ParcelEdit = lazy(() => import('./components/Parcels/Edit'));
const OrderEdit = lazy(() => import('./components/Orders/Edit'));

const Login = lazy(() => import('./components/Login'));
function MyFallbackComponent({ componentStack, error }: FallbackProps) {
  return (
    <>
      <h1>Oops! An Error occured!</h1>
      <h3>here is what we know....</h3>
      <p><strong>Error:</strong> {error && error.toString()}</p>
      <p><strong>StackTrace:</strong> {componentStack}</p>
    </>
  )
}

class App extends Component {
  render() {
    return (
      <ErrorBoundary FallbackComponent={MyFallbackComponent} >
        <Router>
          <>
            <Header />
            <Suspense fallback={<h1>Loading ...</h1>}>
                <>
                  <LoginRoute path='/' exact component={Login} />
                  <ProtectedRoute path='/orders' component={Orders} />
                  <ProtectedRoute path='/parcel/edit/:id' component={ParcelEdit} />
                  <ProtectedRoute path='/order/edit/:id' component={OrderEdit} />
                  <ProtectedRoute path='/home' component={Home} />
                </>           
            </Suspense>
          </>
        </Router>
      </ErrorBoundary> 
    );
  }
}

export default App;
