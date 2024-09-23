//imports useState, dispatch, navigate, and signup from authslice
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../reducers/authSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  //set variable for invocation of dispatch
  const dispatch = useDispatch();
  //also navigate
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Define the error state


  //handleSubmit//
  const handleSubmit = (e) => {
    e.preventDefault();
    //useDispatch
    dispatch(signup({ firstName, lastName, username, password }))
      .unwrap()
      .then(() => {
        setFirstName(''); // Clear the first name input
        setLastName(''); // Clear the last name input
        setUsername(''); // Clear the username input
        setPassword(''); // Clear the password input
        //on successful creation... navigate back to login
        navigate('/');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // const handleTest = () => {
  //   navigate('/')
  // }

  return (
    <div className='login-page'>
      <div className='box'>
      <h2>Signup</h2>
      {error && <p className='error'>{error}</p>}
      <form id='signupForm' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input-field'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type='text'
          className='input-field'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type='text'
          className='input-field'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type='password'
          className='input-field'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className='button-container'>
        <button type='submit' className='login-button'>Signup!</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Signup;
