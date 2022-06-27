import { Modal, Box, Typography } from '@mui/material';
import IntegrationsButtons from '../IntegrationsButtons/IntegrationsButtons';
import { linkService } from '../../link-service';
import { useState, useEffect } from 'react';
import './IntegrationsModal.css';

const IntegrationsModal = (props) => {
  const [enabledIntegrations, setEnabledIntegrations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    linkService
      .integrations()
      .then((data) => {
        setEnabledIntegrations(data);
      })
      .catch(() => setErrorMessage('Integrations are not available.'));
  }, []);

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
        <IntegrationsButtons enabledIntegrations={enabledIntegrations} />
      </Box>
    </Modal>
  );
};

export default IntegrationsModal;
