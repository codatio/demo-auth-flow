import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import IntegrationsButtons from '../IntegrationsButtons/IntegrationsButtons';
import { linkService } from '../../link-service';
import { useState, useEffect } from 'react';
import './IntegrationsModal.css';
import CloseIcon from '@mui/icons-material/Close';

const waitingForComplete = 'waitingForComplete';
const connectionSuccess = 'connectionSuccess';
const connectionFailure = 'connectionFailure';

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
          // Check if the selectedIntegration has a data connection error
          // If so, set the connection state to connectionError
          // Get the error message from the data connection error
          // And display to user, change button text to 'Error'
          if (matchingConnection?.dataConnectionErrors?.length > 0) {
            setErrorMessage(
              matchingConnection.dataConnectionErrors[0].statusText
            );
            setConnectionState(connectionFailure);
            clearInterval(interval);
          }
        });
        // If it has not complete, try again in 5 seconds
      }, 5000);
    } else if (connectionState === connectionSuccess) {
      props.onConnectionLinked();
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
        <div className="close-icon">
          <IconButton onClick={props.handleModalToggle}>
            <CloseIcon />
          </IconButton>
        </div>
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
                : connectionState === connectionFailure
                ? 'Error'
                : 'Confirm'}
            </Button>
            <Typography variant="body2">
              {connectionState === waitingForComplete
                ? 'A new window will open. Please follow the instructions to link your accounting package.'
                : connectionState === connectionSuccess
                ? 'Great job! Thanks for your accounting data 😎'
                : connectionState === connectionFailure
                ? ''
                : 'By clicking this button, you will be redirected to your accounting platform to authorize the connection.'}
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default IntegrationsModal;
