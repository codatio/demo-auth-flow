import React from 'react'
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/:userId/dashboard' element={<Dashboard />} />
        <Route 
          path="*"
          //When we create a dashboard, we can redirect to it instead of the login page
          element={<Navigate replace to="/login" />}
        /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
