import './Header.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import { useContext } from 'react';
import { LinkContext } from '../../App';

const Header = () => {
  const navigate = useNavigate();
  const { userId, applied } = useContext(LinkContext);

  const goToProfile = () => {
    navigate(routes.dashboard(userId));
  };

  return (
    <header className="main-header">
      <CompanyLogo />
      <Button
        onClick={goToProfile}
        disabled={!applied}
      >
        My profile
      </Button>
    </header>
  );
};

export default Header;
