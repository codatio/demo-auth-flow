import { Typography, Button } from '@mui/material';
import './Dashboard.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
// Components
import Header from '../../components/Header/Header';
import FlexColumns from '../../components/FlexColumns/FlexColumns';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import CompanyConnections from '../../components/CompanyConnections/CompanyConnections';

const Dashboard = () => {
  const { userId } = useParams();

  const listItems = [
    {
      key: 'Name:',
      value: <Typography variant="body1">User name</Typography>,
    },
    {
      key: 'User e-mail:',
      value: <Typography variant="body1">email@company.com</Typography>,
    },
    {
      key: 'User ID:',
      value: <Typography variant="body1">{userId}</Typography>,
    },
  ];

  const navigate = useNavigate();

  const handleApplication = () => {
    navigate(routes.loanForm(userId));
  };

  return (
    <>
      <Header />
      <div className="dashboard-content-wrapper">
        <SectionWrapper title="Account information">
          <FlexColumns backgroundActive listItems={listItems} />
        </SectionWrapper>
        <CompanyConnections />
        <SectionWrapper title="Your loans">
          <Typography>
            To apply for a loan, you will be required to fill out a loan form.
          </Typography>
          <Button variant="contained" onClick={handleApplication} size="large">
            Apply
          </Button>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Dashboard;
