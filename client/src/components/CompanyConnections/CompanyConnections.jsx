import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { linkService } from "../../link-service";

import ConnectionDisplay from "../ConnectionDisplay/ConnectionDisplay";
import PropTypes from "prop-types";

const CompanyConnections = (props) => {
  const { userId } = props;
  const [companyConnections, setCompanyConnections] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    linkService
      .connections(userId)
      .then((data) => {
        setCompanyConnections(data);
      })
      .catch(() => {
        setErrorMessage("Something went wrong.");
      });
  }, []);

  return (
    <>
      {errorMessage ? (
        <Typography>Error: {errorMessage}</Typography>
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
          <Typography>No connections found</Typography>
        </div>
      )}
    </>
  );
};

CompanyConnections.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default CompanyConnections;
