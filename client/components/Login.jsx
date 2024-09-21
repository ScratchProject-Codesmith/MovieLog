import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/authSlice';
import { useNavigate } from 'react-router-dom';

//need is logged in state.

const Login = () => {
  //set variable for invocation of dispatch
  const dispatch = useDispatch();
  //set variable for invocation of Navigate
  const navigate = useNavigate();

  //destructure loading, and error from the auth slice
  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //handleSubmit//
  const handleSubmit = (e) => {
    // prevent default action so we can handle this with Javascript
    e.preventDefault();
    //use dispatch
    dispatch(login({ username, password }))
      //unwrap the promise from async thunk for error handling
      .unwrap()
      .then(() => {
        setUsername(''); // Clear the username input
        setPassword(''); // Clear the password input
        //navigate to home page
        navigate('/home?'); ////NEED NAME OF HOME ROUTE////
      })
      .catch((error) => {
        console.log('ERROR ON LOGIN COMPONENT', error);
      });
  };

  //handleClick// function
  const handleClick = () => {
    //route to signup?
    navigate('/signup');
  };

  const handleTestRoute = () => {
    navigate('/App')
  }

  //Fields:
  //Div with Header for Title
  //Div to wrap form element
  //Form element:
  //IF ERROR LOG THE ERROR FOR USER! in a paragraph element or something.
  //username input, on change will update state to the users input.
  //password input.
  //signup button onClick{handleclick}
  //login button disable on "loading" state
  //if loading, "LOGGING IN..." else 'Login'

  return (
    <div className='LoginBox'>
      <h2>LOGIN FOR MOVIE LOG, LOGGGGIN, KENNY LOGGINS</h2>
      {error && <p className='error'>{error}</p>}
      <form id='loginForm' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Loggin in...' : 'Login'}
        </button>
      </form>
      <button onClick={handleClick}>Sign Up!</button>
      <button onClick={handleTestRoute}>ROUTETEST</button>
    </div>
  );
};

//export
export default Login;
