import React from 'react';
import { RouteProps, RouteComponentProps, Redirect, Route} from 'react-router-dom';
import AuthService from '../../Auth';

const ProtectedRoute = ({ component, ...rest }: RouteProps) => {
  if (!component) {
    throw "component is undefined";
  }

  const Component = component; // JSX Elements have to be uppercase.
  const render = (props: RouteComponentProps<any>): React.ReactNode => {
    if (AuthService.getProfile()['username'] !== '') {
      return <Component {...props} />;
    }
    return <Redirect to={{ 
      pathname: "/",
      state: { from: props.location }
    }} />
  };

  return (<Route {...rest} render={render} />);
}

export default ProtectedRoute;