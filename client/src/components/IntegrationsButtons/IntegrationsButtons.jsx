import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import React from "react";
import "./IntegrationsButtons.css";
import PropTypes from "prop-types";

const IntegrationsButtons = (props) => {
  const handleIntegrationSelection = (event, newSelectedIntegration) => {
    props.setSelectedIntegration(newSelectedIntegration);
  };

  return (
    <ToggleButtonGroup
      className="integrations-buttons"
      value={props.selectedIntegration}
      onChange={handleIntegrationSelection}
      exclusive
    >
      {props.enabledIntegrations.map((integration) => {
        return (
          <ToggleButton
            className={`integration-button ${
              integration.key === props.selectedIntegration?.key
                ? "integration-button--active"
                : "integration-button--inactive"
            }`}
            value={{ key: integration.key, sourceId: integration.sourceId }}
            key={integration.key}
          >
            <img alt={integration.name} src={integration.logoUrl} />
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

IntegrationsButtons.propTypes = {
  setSelectedIntegration: PropTypes.func.isRequired,
  enabledIntegrations: PropTypes.array.isRequired,
  selectedIntegration: PropTypes.object,
};

export default IntegrationsButtons;
