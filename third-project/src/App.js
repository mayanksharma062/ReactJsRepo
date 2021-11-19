import React, {useState} from 'react';
import AddUser from './components/Users/AddUser.js';
import UsersList from './components/Users/UsersList.js';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
