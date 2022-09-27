import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { linkService } from "../../link-service";

//Components
import ConnectionDisplay from "../ConnectionDisplay/ConnectionDisplay";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

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
