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

//Assets
import ListIcon from '../../assets/images/icons/bullet-point.svg';
import Blob from '../../assets/images/blob.svg';

const HomePage = () => {
  const sellingPoints = [
    'Match with 12+ lenders (swipe right!)',
    'Its free to apply and it doesn’t affect your credit score',
    'Expert help throught the process',
    'Loans from £1000 to £15M',
  ];

  return (
    <>
      <Header />
      <div className="home-page-wrapper">
        <div className="home-page-left-column">
          <Typography variant="h4" component="h2">Apply for a loan within minutes</Typography>
          <Typography className="home-page-description">
            You need money. We have money. It's that simple.
          </Typography>

          <List>
            {sellingPoints.map((sellingPoint) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <img src={ListIcon} alt="Checkmark list icon." />
                  </ListItemIcon>
                  <ListItemText className="home-page-selling-point" primary={sellingPoint}></ListItemText>
                </ListItem>
              );
            })}
          </List>
          <Button variant="contained" color="primary">
          Apply for a loan
        </Button>
        </div>
        <div className="home-page-right-column">
          <img src={Blob} alt="An image showing a credit card." />
        </div>
      </div>
    </>
  );
};

export default HomePage;
