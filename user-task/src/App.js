import React from 'react'
import Navbar from './components/Navbar'
import Users from './Routes/Users'
import Posts from './Routes/Posts'
import Home from './Routes/Home'
import EditUser from './Routes/EditUser'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Navbar/>

      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Home/>}/>
        <Route exact path="users" caseSensitive={false} element={<Users/>}/>
        <Route exact path="posts" caseSensitive={false} element={<Posts/>}/>
        <Route path="edituser" caseSensitive={false} element={<EditUser/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
