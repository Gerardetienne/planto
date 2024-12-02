import React, { useReducer } from 'react';

type AuthState = { 
    isLoggedIn: boolean; 
    user: string };

type AuthAction = { type: 'login'; user: string } | { type: 'logout' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'login':
      return { isLoggedIn: true, user: action.user };
    case 'logout':
      return { isLoggedIn: false, user: '' };
    default:
      return state;
  }
};

const Auth: React.FC = () => {
  const [authState, dispatch] = useReducer(authReducer, { isLoggedIn: false, user: '' });

  return (
    <div>
      {authState.isLoggedIn ? (
        <p >Welcome, {authState.user}! <button className='bg-primary' onClick={() => dispatch({ type: 'logout' })}>Logout</button></p>
      ) : (
        <p>Please log in <button className='bg-secondary' onClick={() => dispatch({ type: 'login', user: 'Gerard' })}>Login</button></p>
      )}
    </div>
  );
};

export default Auth