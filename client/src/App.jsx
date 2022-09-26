import React, { useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import LoanForm from './pages/LoanForm/LoanForm';
import HomePage from './pages/HomePage/HomePage';
import RedirectHandler from './pages/RedirectHandlerPage/RedirectHandlerPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routes';

export const LinkContext = React.createContext({});

const App = () => {
  const [applied, setApplied] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <LinkContext.Provider value={{ applied, userId }}>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.home}
            element={<HomePage setApplied={setApplied} setUserId={setUserId} />}
          />
          <Route path={routes.dashboard(':userId')} element={<Dashboard />} />
          <Route path={routes.loanForm(':userId')} element={<LoanForm />} />
          <Route path={routes.redirect} element={<RedirectHandler />} />
          <Route path="*" element={<Navigate replace to={routes.home} />} />
        </Routes>
      </BrowserRouter>
    </LinkContext.Provider>
  );
};

export default App;
