import './Header.css';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../../routes';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import { useContext } from 'react';
import { LinkContext } from '../../App';

const Header = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const goToProfile = () => {
    navigate(routes.dashboard(userId));
  };

  const linkContext = useContext(LinkContext);

  return (
    <header className="main-header">
      <CompanyLogo />
      <Button
        onClick={goToProfile}
        disabled={linkContext.applied ? false : true}
      >
        My profile
      </Button>
    </header>
  );
};

export default Header;
