import { Typography } from '@mui/material';
import './Dashboard.css';
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { linkService } from '../../link-service';
// Components
import Header from '../../components/Header/Header';
import FlexColumns from '../../components/FlexColumns/FlexColumns';
import ConnectionDisplay from '../../components/ConnectionDisplay/ConnectionDisplay';
import ConnectionsSummary from '../../components/ConnectionsSummary/ConnectionsSummary';

const Dashboard = () => {
  const { userId } = useParams();
  const [companyConnections, setCompanyConnections] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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

  const formattedCompanyConnections = companyConnections.map(
    (connectionObject) => {
      return {
        title: connectionObject.platformName,
        id: connectionObject.id,
        listItems: [
          {
            key: 'Status',
            value: connectionObject.status,
          },
          {
            key: 'Source type',
            value: connectionObject.sourceType,
          },
        ],
      };
    }
  );

  return (
    <>
      <Header />
      <div className="dashboard-content-wrapper">
        <div>
          <Typography variant="h3" gutterBottom>
            Your account
          </Typography>
          <FlexColumns listItems={listItems} />
          <Typography variant="h3" gutterBottom>
            Your connections
          </Typography>
          <ConnectionsSummary error={errorMessage} companyConnections={companyConnections}/>
          <div className="connection-display-wrapper">
            {companyConnections.map((companyConnection) => (
              <ConnectionDisplay
                key={companyConnection.id}
                connectionObject={companyConnection}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
