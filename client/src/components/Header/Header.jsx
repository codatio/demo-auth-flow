import './Header.css';
import { Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../../routes';

const Header = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const goToProfile = () => {
    navigate(routes.dashboard(userId));
  };

  return (
    <header className="main-header">
      <Typography variant="h3" className="main-header-text">
        GenBus Ltd.
      </Typography>
      <Button onClick={goToProfile}>My profile</Button>
    </header>
  );
};

export default Header;
