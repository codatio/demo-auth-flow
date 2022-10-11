import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import IntegrationsButtons from "../IntegrationsButtons/IntegrationsButtons";
import { linkService } from "../../link-service";
import { useState, useEffect } from "react";
import "./IntegrationsModal.css";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const waitingForComplete = "waitingForComplete";
const connectionSuccess = "connectionSuccess";
const connectionFailure = "connectionFailure";

const IntegrationsModal = ({
  isModalOpen,
  handleModalToggle,
  userId,
  onConnectionLinked,
}) => {
  const [enabledIntegrations, setEnabledIntegrations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [connectionState, setConnectionState] = useState("");
  const [ignoreErrorBefore, setIgnoreErrorBefore] = useState(new Date());

  useEffect(() => {
    linkService
      .integrations()
      .then((data) => {
        setEnabledIntegrations(data);
      })
      .catch(() => setErrorMessage("Integrations are not available."));
  }, []);

  const onPlatformSubmit = () => {
    if (connectionState === connectionSuccess) {
      handleModalToggle()
    }

    if (selectedIntegration && !connectionState) {
      setConnectionState(waitingForComplete);
      linkService
        .postConnection(userId, selectedIntegration.key)
        .then((data) => {
          window.open(data.linkUrl, "_blank");
        })
        .catch(() => setErrorMessage("Could not add a connection."));
    }
  };

  useEffect(() => {
    if (connectionState === waitingForComplete) {
      const interval = setInterval(() => {
        // Call the getDataConnections endpoint
        linkService.connections(userId).then((connections) => {
          const matchingConnection = connections.find(
            (c) => c.sourceId === selectedIntegration.sourceId
          );

          // Check if the selectedIntegration has changed to Linked
          if (matchingConnection?.status === "Linked") {
            // If it has, set connectionState to connectionSuccess
            setConnectionState(connectionSuccess);
            clearInterval(interval);
          }
          // Check if the selectedIntegration has a data connection error
          //   If so, set the connection state to connectionError
          //   Get the error message from the data connection error
          //   And display to user, change button text to 'Error'
          const firstError = matchingConnection?.dataConnectionErrors?.[0];
          if (firstError) {
            const errorTimestamp = new Date(firstError.erroredOnUtc);

            if (errorTimestamp > ignoreErrorBefore) {
              setErrorMessage(firstError.statusText);
              setConnectionState(connectionFailure);
              clearInterval(interval);
            }
          }
        });
        // If it has not completed, try again in 5 seconds
      }, 5000);
    } else if (connectionState === connectionSuccess) {
      onConnectionLinked();
    }
  }, [connectionState]);

  const onIntegrationSelect = (integration) => {
    if (!connectionState) {
      setSelectedIntegration(integration);
    }
  };

  const onTryAgainClick = () => {
    setErrorMessage(null);
    setSelectedIntegration(null);
    setIgnoreErrorBefore(new Date());
    setConnectionState("");
  };

  return (
    <Modal open={isModalOpen} onClose={handleModalToggle}>
      <Box className="integrations-modal-wrapper">
        <div className="close-icon">
          <IconButton onClick={handleModalToggle}>
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
          <>
            <Typography>{errorMessage}</Typography>
            <Button variant="contained" size="large" onClick={onTryAgainClick}>
              Try again
            </Button>
          </>
        ) : (
          <>
            <IntegrationsButtons
              enabledIntegrations={enabledIntegrations}
              setSelectedIntegration={onIntegrationSelect}
              selectedIntegration={selectedIntegration}
            />
            <Button variant="contained" size="large" onClick={onPlatformSubmit}>
              {connectionState === waitingForComplete
                ? "Waiting..."
                : connectionState === connectionSuccess
                ? "Done"
                : connectionState === connectionFailure
                ? "Error"
                : "Confirm"}
            </Button>
            <Typography variant="body2">
              {connectionState === waitingForComplete
                ? "A new window will open. Please follow the instructions to link your accounting package."
                : connectionState === connectionSuccess
                ? "Thank you for sharing your accounting data."
                : connectionState === connectionFailure
                ? ""
                : "By clicking this button, you will be redirected to your accounting platform to authorize the connection."}
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

IntegrationsModal.propTypes = {
  userId: PropTypes.string.isRequired,
  onConnectionLinked: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  handleModalToggle: PropTypes.func.isRequired,
};

export default IntegrationsModal;
