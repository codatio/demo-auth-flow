import { Modal, Box, Typography, Button } from '@mui/material';
import IntegrationsButtons from '../IntegrationsButtons/IntegrationsButtons';
import { linkService } from '../../link-service';
import { useState, useEffect } from 'react';
import './IntegrationsModal.css';

const waitingForComplete = 'waitingForComplete';
const connectionSuccess = 'connectionSuccess';

const IntegrationsModal = (props) => {
  const [enabledIntegrations, setEnabledIntegrations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [connectionState, setConnectionState] = useState('');

  useEffect(() => {
    linkService
      .integrations()
      .then((data) => {
        setEnabledIntegrations(data);
      })
      .catch(() => setErrorMessage('Integrations are not available.'));
  }, []);

  const onPlatformSubmit = () => {
    if (selectedIntegration && !connectionState) {
      setConnectionState(waitingForComplete);
      linkService
        .postConnection(props.userId, selectedIntegration.key)
        .then((data) => {
          window.open(data.linkUrl, '_blank');
        })
        .catch(() => setErrorMessage('Could not add a connection.'));
    }
  };

  useEffect(() => {
    if (connectionState === waitingForComplete) {
      const interval = setInterval(() => {
        // Call the getDataConnections endpoint
        linkService.connections(props.userId).then((connections) => {
          const matchingConnection = connections.find(
            (c) => c.sourceId === selectedIntegration.sourceId
          );

          // Check if the selectedIntegration has changed to Linked
          if (matchingConnection?.status === 'Linked') {
            // If it has, set connectionState to connectionSuccess
            setConnectionState(connectionSuccess);
            clearInterval(interval);
          }
        });
      // If it has not complete, try again in 5 seconds
      }, 5000);

    }
  }, [connectionState]);

  const onIntegrationSelect = (integration) => {
    if (!connectionState) {
      setSelectedIntegration(integration);
    }
  };

  return (
    <Modal open={props.isModalOpen} onClose={props.handleModalToggle}>
      <Box className="integrations-modal-wrapper">
        <Typography
          className="integrations-modal-title"
          variant="h6"
          component="h2"
        >
          Select your integration
        </Typography>
        {errorMessage ? (
          <Typography>🙁{errorMessage}</Typography>
        ) : (
          <>
            <IntegrationsButtons
              enabledIntegrations={enabledIntegrations}
              setSelectedIntegration={onIntegrationSelect}
              selectedIntegration={selectedIntegration}
            />
            <Button variant="contained" size="large" onClick={onPlatformSubmit}>
              {connectionState === waitingForComplete
                ? 'Waiting...'
                : connectionState === connectionSuccess
                ? 'Success!'
                : 'Confirm'}
            </Button>
            <Typography variant="body2">
              {
                connectionState === waitingForComplete
                ? 'A new window will open. Please follow the instructions to link your accounting package.'
                : connectionState === connectionSuccess
                ? 'Great job! Thanks for your accounting data 😎'
                : 'By clicking this button, you will be redirected to your accounting platform to authorize the connection.'
              }
              
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default IntegrationsModal;
