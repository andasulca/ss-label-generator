import React from 'react';
import { UsersContextProvider } from './context';
import UsersList from './UsersList';
import UserDeails from './UserDetails';
import AddUser from './AddUser';

const App = () => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Joanna' },
  ];
  return (
    <div className="app">
      <UsersContextProvider users={users}>
        <UsersList />
        <UserDeails />
        <AddUser />
      </UsersContextProvider>
    </div>
  );
};

export default App;
