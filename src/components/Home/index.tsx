import React from 'react';
import AuthService from '../../Auth';

function Home() {
  return (
    <h1>Home {AuthService.getProfile()['username']}</h1>
  );
}

export default Home;