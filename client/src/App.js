import React from 'react'
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
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
