import { Modal, Box, Typography, Button } from '@mui/material';
import IntegrationsButtons from '../IntegrationsButtons/IntegrationsButtons';
import { linkService } from '../../link-service';
import { useState, useEffect } from 'react';
import './IntegrationsModal.css';

const IntegrationsModal = (props) => {
  const [enabledIntegrations, setEnabledIntegrations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedIntegration, setSelectedIntegration] = useState('');

  useEffect(() => {
    linkService
      .integrations()
      .then((data) => {
        setEnabledIntegrations(data);
      })
      .catch(() => setErrorMessage('Integrations are not available.'));
  }, []);

  const onPlatformSubmit = () => {
    linkService
      .postConnection(props.userId, selectedIntegration)
      .then((data) => {
        window.open(data.linkUrl, '_blank');
      })
      .catch(() => setErrorMessage('Could not add a connection.'));
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
        {errorMessage && <Typography>{errorMessage}</Typography>}
        <IntegrationsButtons
          enabledIntegrations={enabledIntegrations}
          setSelectedIntegration={setSelectedIntegration}
          selectedIntegration={selectedIntegration}
        />
        <Button variant="contained" size="large" onClick={onPlatformSubmit}>
          Confirm
        </Button>
        <Typography variant="body2">
          By clicking this button, you will be redirected to your accounting
          platform to authorize the connection.
        </Typography>
      </Box>
    </Modal>
  );
};

export default IntegrationsModal;
