import Header from '../../components/Header/Header';
import { Typography } from '@mui/material';
import './Dashboard.css';
import FlexColumns from '../../components/FlexColumns/FlexColumns';
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { linkService } from '../../link-service';

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
    linkService.connections(userId)
      .then((data) => {
        setCompanyConnections(data);
      })
      .catch(() => {setErrorMessage('Something went wrong.')})
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
          {errorMessage && <Typography>{errorMessage}</Typography>}
          {formattedCompanyConnections.length > 0 ? (
            formattedCompanyConnections.map((item) => {
              return (
                <Fragment key={item.id}>
                  <Typography>{item.title}</Typography>
                  <FlexColumns listItems={item.listItems} />
                </Fragment>
              );
            })
          ) : (
            <Typography>Connections not found!</Typography>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
