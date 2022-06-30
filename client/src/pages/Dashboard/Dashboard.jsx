import { Typography, Button } from '@mui/material';
import './Dashboard.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { linkService } from '../../link-service';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
// Components
import Header from '../../components/Header/Header';
import FlexColumns from '../../components/FlexColumns/FlexColumns';
import ConnectionDisplay from '../../components/ConnectionDisplay/ConnectionDisplay';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

const Dashboard = () => {
  const { userId } = useParams();
  const [companyConnections, setCompanyConnections] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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

  useEffect(() => {
    linkService
      .connections(userId)
      .then((data) => {
        setCompanyConnections(data);
      })
      .catch(() => {
        setErrorMessage('Something went wrong.');
      });
  }, []);

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
        <SectionWrapper title="Company connections">
          {errorMessage && <Typography>{errorMessage}</Typography>}
          {companyConnections.length > 0 ? (
            companyConnections.map((companyConnection) => (
              <ConnectionDisplay backgroundActive
                key={companyConnection.id}
                connectionObject={companyConnection}
              />
            ))
          ) : (
            <div className="connections-error-box">
              <Typography>Connections not found!</Typography>
            </div>
          )}
        </SectionWrapper>
        <SectionWrapper title="Your loans">
          <Typography>
            To apply for a loan, you will be required to fill out a loan form.
          </Typography>
          <Button
            variant="contained"
            onClick={handleApplication}
            size="large"
          >
            Apply
          </Button>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Dashboard;
