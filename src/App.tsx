import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import DashBoard from './components/DashBoard';

import {useDispatch} from 'redux-react-hook';

const Login = lazy(() => import('./components/Login'));

class App extends Component {
  render() {
    return (
      <ErrorBoundary FallbackComponent={() => <h1>ERROR</h1>} >
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Router>
            <>
              <Route path='/login' exact component={Login} />
              <DashBoard/> 
            </>           
          </Router>
        </Suspense>
      </ErrorBoundary> 
    );
  }
}

export default App;
