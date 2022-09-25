import Header from '../../components/Header/Header';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { linkService } from '../../link-service';
import { routes } from '../../routes';
import { useContext } from 'react';
import { LinkContext } from '../../App';

//Assets
import ListIcon from '../../assets/images/icons/bullet-point.svg';
import Card from '../../assets/images/card.svg';
import vectors from './vectors';

const HomePage = () => {
  const navigate = useNavigate();

  const linkContext = useContext(LinkContext)
  
  const handleApply = () => {
    linkService.apply().then((data) => {
      const { userId } = data;
      linkContext.setApplied(true)
      navigate(routes.loanForm(userId));
    });
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
        <Header className="home-page-header"/>
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
              Apply for a loan
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
