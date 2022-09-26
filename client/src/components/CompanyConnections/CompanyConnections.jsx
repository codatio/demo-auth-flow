import { useEffect, useState, useContext } from 'react';
import { Typography } from '@mui/material';
import { linkService } from '../../link-service';
import { LinkContext } from '../../App';

//Components
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import ConnectionDisplay from '../ConnectionDisplay/ConnectionDisplay';

const CompanyConnections = () => {
  const { userId } = useContext(LinkContext);
  const [companyConnections, setCompanyConnections] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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
