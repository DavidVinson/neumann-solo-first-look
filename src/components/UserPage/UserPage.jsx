import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  return (
    <div className='container'>
      <h2>
        Welcome, {user.username}!{' '}
        <span>
          <button onClick={() => history.push('/pets')}>Go To My Pets</button>
        </span>
      </h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className='btn' />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
