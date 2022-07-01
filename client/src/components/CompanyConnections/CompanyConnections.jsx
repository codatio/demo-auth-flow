import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { linkService } from '../../link-service';
//Components
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import ConnectionDisplay from '../ConnectionDisplay/ConnectionDisplay';

const CompanyConnections = () => {
  const [companyConnections, setCompanyConnections] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { userId } = useParams();
  
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

  return (
    <SectionWrapper title="Company connections">
      {errorMessage ? (
        <Typography>🙁{errorMessage}</Typography>
      ) : companyConnections.length > 0 ? (
        companyConnections.map((companyConnection) => (
          <ConnectionDisplay
            backgroundActive
            key={companyConnection.id}
            connectionObject={companyConnection}
          />
        ))
      ) : (
        <div>
          <Typography>❌Connections not found!</Typography>
        </div>
      )}
    </SectionWrapper>
  );
};

export default CompanyConnections;
