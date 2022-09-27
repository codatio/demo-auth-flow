import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { linkService } from '../../link-service';
import { routes } from '../../routes';
import './HomePage.css';

//Assets
import Card from '../../assets/images/card.svg';
import ListIcon from '../../assets/images/icons/bullet-point.svg';
import vectors from './vectors';

const HomePage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const appliedUserId = params.get('userId');

  const handleApply = () => {
    if (!appliedUserId) {
      linkService.apply().then((data) => {
        const { userId } = data;
        navigate(routes.loanForm(userId));
      });
    } else {
      navigate(routes.dashboard(appliedUserId));
    }
  };

  const sellingPoints = [
    'Revenue-based loan',
    'Free to apply and it doesn’t affect your credit score',
    'Expert help throught the process',
    'No paperwork',
  ];

  return (
    <>
      <div className="home-page-element">
        <Header className="home-page-header" userId={appliedUserId} />
        <div className="home-page-wrapper">
          <div className="home-page-left-column">
            <Typography variant="h4" component="h2">
              Apply for a loan within minutes
            </Typography>
            <Typography className="home-page-description">
              Find the loan for you from £10,000 to £100,000. Connect your
              accounting software to check your eligibility fast.
            </Typography>

            <List>
              {sellingPoints.map((sellingPoint) => {
                return (
                  <ListItem key={sellingPoint}>
                    <ListItemIcon>
                      <img src={ListIcon} alt="Checkmark list icon." />
                    </ListItemIcon>
                    <ListItemText
                      className="home-page-selling-point"
                      primary={sellingPoint}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Button variant="contained" color="primary" onClick={handleApply}>
              {appliedUserId ? 'Go to your profile' : 'Apply for a loan'}
            </Button>
          </div>
          <div className="home-page-right-column">
            <div className="home-page-image">
              <img className="home-page-card-image" src={Card} alt="" />
              <div className="home-page-vectors-wrapper">
                {vectors.map((vector, index) => (
                  <img key={index} src={vector} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
