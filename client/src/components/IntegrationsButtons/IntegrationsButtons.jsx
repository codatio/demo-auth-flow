import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import React, { useState } from 'react';
import './IntegrationsButtons.css';

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
              integration.key === props.selectedIntegration
                ? 'integration-button--active'
                : 'integration-button--inactive'
            }`}
            value={integration.key}
            key={integration.key}
          >
            <img src={integration.logoUrl} />
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default IntegrationsButtons;
