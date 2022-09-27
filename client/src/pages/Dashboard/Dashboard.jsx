import { Typography, Button } from "@mui/material";
import "./Dashboard.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../routes";
import { LinkContext } from "../../App";

// Components
import Header from "../../components/Header/Header";
import FlexColumns from "../../components/FlexColumns/FlexColumns";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import CompanyConnections from "../../components/CompanyConnections/CompanyConnections";

const Dashboard = () => {
  const {
    userDetails: { name, email },
  } = useContext(LinkContext);

  const params = useParams();
  const userId = params["userId"];

  const listItems = [
    {
      key: "Name:",
      value: (
        <Typography variant="body1">{name || "No name submitted."}</Typography>
      ),
    },
    {
      key: "User e-mail:",
      value: (
        <Typography variant="body1">
          {email || "No email submitted."}
        </Typography>
      ),
    },
    {
      key: "User ID:",
      value: (
        <Typography variant="body1">
          {userId || "No user ID assigned."}
        </Typography>
      ),
    },
  ];

  const navigate = useNavigate();

  const handleApplication = () => {
    navigate(routes.loanForm(userId));
  };

  return (
    <>
      <Header userId={userId} />
      <div className="dashboard-content-wrapper">
        <SectionWrapper title="Account information">
          <FlexColumns backgroundActive listItems={listItems} />
        </SectionWrapper>
        <CompanyConnections userId={userId} />
        <SectionWrapper title="Your progress">
          <Typography>To apply for a loan, complete the loan form.</Typography>
          <Button variant="contained" onClick={handleApplication} size="large">
            Go to your loan form
          </Button>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Dashboard;
