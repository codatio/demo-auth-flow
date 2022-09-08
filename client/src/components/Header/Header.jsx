import './Header.css';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../../routes';
import CompanyLogo from '../CompanyLogo/CompanyLogo'

const Header = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const goToProfile = () => {
    navigate(routes.dashboard(userId));
  };

  return (
    <header className="main-header">
      <CompanyLogo/>
      <Button onClick={goToProfile}>My profile</Button>
    </header>
  );
};

export default Header;
