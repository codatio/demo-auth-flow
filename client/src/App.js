import React from 'react'
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<Login />}/>
        <Route path={routes.dashboard(':userId')} element={<Dashboard />} />
        <Route 
          path="*"
          element={<Navigate replace to={routes.login} />}
        /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;