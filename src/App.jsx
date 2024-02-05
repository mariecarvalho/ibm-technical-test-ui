import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/LoginForm';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import MagicForm from './components/MagicForm/MagicForm';
import MagicList from './components/MagicList/MagicList';
import MagicDetails from './components/MagicDetails/MagicDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './api/auth';


function App() {
  const {authUser, userSignOut} = Auth();
  console.log('authUser', authUser)
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<ProtectedRoute authUser={authUser} />}>
          <Route element={<MagicForm />} path="/create-magic"/>
          <Route element={<MagicList />} path="/spells" />
          <Route element={<MagicDetails />} path="/spells/:spellName" />
        </Route>

      </Routes>
      {authUser ? (
        <>  
        <div className="footer">
          <p>Signed In as {authUser.email}</p>
          <button onClick={userSignOut}>Log Out</button>
        </div>
        </>
      ) : (
        <div className="footer">
          <p>Signed Out</p>
        </div>
      )}
    </Router>
  );
}

export default App;