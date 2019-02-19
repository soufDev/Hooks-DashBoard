import React, { useState, FormEvent, useCallback } from 'react';
import { Form, Input, Button, FormInput, ErrorMessage } from '../../styledComponents';
import logo from './logo.svg';
import { RouteComponentProps } from 'react-router';

import { useDispatch, useMappedState } from 'redux-react-hook';
import { State } from '../../interface/GlobalState';
import { connect } from 'react-redux';
import { Dispatch } from '../../redux';

interface Props extends RouteComponentProps<{ history?: string }> {
  login: ({ username, password }: { username: string, password: string }) => void;
  error?: string;
  isLoad?: boolean;
}

interface inputProps {
  error: boolean;
  value: string;
  onChange(e: FormEvent<EventTarget>): void;
  setError(value: boolean): void;
}
// constum hook to handle inputs
function useInput(initialValue: string): inputProps {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const onChange = (e: FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
    setError(target.value.length > 0 ? false : true);
  }

  return { value, onChange, error, setError };
}

// function to check the inputs before submit and set the error 
function checkBeforeSubmit(username: inputProps, password: inputProps): boolean {
  if (username.value === '' && password.value === '') {
    username.setError(true);
    password.setError(true);
  } else if (username.value === '') {
    username.setError(true);
  }
  else if (password.value === '') {
    password.setError(true);
  } else {
    return true;
  }
  return false;
}

const mapState = (state: State) => ({
  error: state.login.error,
  isLoad: state.login.isLoad,
});
// login Component
function Login(props: Props) {
  const username = useInput('');
  const password = useInput('');
  const { error, isLoad } = props;
  // create actions
  // const dispatch = useDispatch();
  // console.log(dispatch({ type: 'login' }));
  const handleSubmit = useCallback(
    () => {
      if(checkBeforeSubmit(username, password)) {
        try {
          // dispatch({ type: 'LOGIN_REQUEST', data: {
          //   username: username.value,
          //   password: password.value
          // }, history: props.history});
          props.login && props.login(({
            username: username.value,
            password: password.value
          }));
        } catch (e) {
          console.log({ e });
        }
      }
    },[username.value, password.value]);
  return ( 
    <Form>
      <img src={logo} style={{ width: 250 }} />
      <FormInput>
        <Input type="text" placeholder="username" value={username.value} onChange={username.onChange} theme={{ color: username.error ? '#fce4e4': '#f1f1f1' }} />
        <ErrorMessage theme={{ display: username.error ? 'block' : 'none' }}>Please Enter Your usename</ErrorMessage>
      </FormInput>
      <FormInput>
        <Input type="password" placeholder="password" value={password.value} onChange={password.onChange} theme={{ color: password.error ? '#fce4e4': '#f1f1f1' }} />
        <ErrorMessage theme={{ display: password.error ? 'block' : 'none' }}>Please Enter Your password</ErrorMessage>
      </FormInput>
      <FormInput>
        <Button onClick={handleSubmit} disabled={isLoad}>Log In</Button>
        <ErrorMessage theme={{ display: error ? 'block' : 'none' }} style={{textAlign: 'center'}}>Please Check your username/password</ErrorMessage>
      </FormInput>  
    </Form>
  );
}

const mapStateToProps = (state: State) => ({
  error: state.login.error,
  isLoad: state.login.isLoad,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: ({ username, password }: { username: string, password: string }) => dispatch.login.login({ username, password }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
