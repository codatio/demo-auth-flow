import React from 'react';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import LoanForm from './pages/LoanForm/LoanForm';
import HomePage from './pages/HomePage/HomePage';
import RedirectHandler from './pages/RedirectHandlerPage/RedirectHandlerPage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.dashboard(':userId')} element={<Dashboard />} />
        <Route path={routes.loanForm(':userId')} element={<LoanForm />}/>
        <Route path={routes.redirect} element={<RedirectHandler />}/>
        <Route 
          path="*"
          element={<Navigate replace to={routes.home} />}
        /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
