import React, { useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import LoanForm from './pages/LoanForm/LoanForm';
import HomePage from './pages/HomePage/HomePage';
import RedirectHandler from './pages/RedirectHandlerPage/RedirectHandlerPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routes';

export const LinkContext = React.createContext({});

const App = () => {
  // Should be stored on the API
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
  });

  return (
    <LinkContext.Provider value={{ userDetails }}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.dashboard(':userId')} element={<Dashboard />} />
          <Route
            path={routes.loanForm(':userId')}
            element={<LoanForm setUserDetails={setUserDetails} />}
          />
          <Route path={routes.redirect} element={<RedirectHandler />} />
          <Route path="*" element={<Navigate replace to={routes.home} />} />
        </Routes>
      </BrowserRouter>
    </LinkContext.Provider>
  );
};

export default App;
