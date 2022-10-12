import { useState, useEffect, useContext } from "react";
import { routes } from "../../routes";
import {
  Typography,
  TextField,
  Slider,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Input,
  Button,
  Autocomplete,
} from "@mui/material";
import "./LoanForm.css";
import { linkService } from "../../link-service";
import { LinkContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../../components/Header/Header";
import FormColumns from "../../components/FormColumns/FormColumns";
//import IntegrationsModal from "../../components/IntegrationsModal/IntegrationsModal";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import CompanyConnections from "../../components/CompanyConnections/CompanyConnections";

import { CodatLink } from '@codat/link-sdk';
import '../../../node_modules/@codat/link-sdk/index.css';

const marks = [
  {
    value: 10,
    label: "£10000",
  },
  {
    value: 50,
    label: "£50000",
  },
  {
    value: 100,
    label: "£100000",
  },
];

const sectorOptions = [
  "Advertising",
  "Agriculture",
  "Automotive",
  "eCommerce",
  "Education",
  "Engineering",
  "Finance",
  "Food and Beverages",
  "Healthcare",
  "Recruitment",
  "Retail",
  "Sport",
  "Technology",
];

const bankOptions = [
  "Atom",
  "Barclays",
  "HSBC",
  "Lloyds",
  "Monzo",
  "Metro Bank",
  "NatWest Group",
  "Santander",
  "Starling",
];

const LoanForm = (props) => {
  const { userDetails } = useContext(LinkContext);
  const params = useParams();
  const userId = params["userId"];

  const [activeConnectionsAvailable, setActiveConnectionsAvailable] =
  useState(false);

  const [companyName, setCompanyName] = useState("");
  const [commercialSale, setCommercialSale] = useState("");
  const [profitStatus, setProfitStatus] = useState("");
  const [homeownerStatus, setHomeownerStatus] = useState("");
  const [mainBank, setMainBank] = useState("");
  const [loanSum, setLoanSum] = useState(10000);
  const sliderValue = loanSum / 1000;
  const [modalOpen, setModalOpen] = useState(false);

  const [connections, setConnections] = useState([])
  //const [companyId, setCompanyId] = useState('')
  // 72f36c8e-997e-48a9-9515-de668a9330d1

  // const startConnecting = () => {
  //   if(companyId === '') {
  //     alert('Add a valid company ID')
  //   } else {
  //     setModalOpen(true)
  //   }
  // }

  const reset = () => {
    setModalOpen(false);
    setConnections([]);
  }

  const navigate = useNavigate();

  const handleApplication = () => {
    navigate(routes.dashboard(userId));
  };

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleUserDetailsChange = (event) => {
    props.setUserDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSliderValueChange = (event, newValue) => {
    setLoanSum(newValue * 1000);
  };

  const handleLoanSumChange = (event) => {
    setLoanSum(event.target.value);
  };

  const refreshActiveConnections = () => {
    linkService.connections(userId).then((data) => {
      const activeConnectionsValue = data.some((c) => c.status === "Linked");
      setActiveConnectionsAvailable(activeConnectionsValue);
    });
  };

  useEffect(() => {
    refreshActiveConnections();
  }, []);

  const onConnectionLinked = () => {
    refreshActiveConnections();
  };

  const companyQuestions = [
    {
      key: "Company name:",
      value: (
        <TextField
          className="company-name-field"
          name="company-name"
          label="Company name"
          required
          variant="outlined"
          onChange={(event) => {setCompanyName(event.target.value)}}
          value={companyName}
        />
      ),
    },
    {
      key: "Which sector(s) do you operate in?",
      value: (
        <Autocomplete
          className="form-value-dropdown"
          multiple
          options={sectorOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Select sector"
              placeholder="Sector(s)"
            />
          )}
          label="Select sector(s)"
        />
      ),
    },
    {
      key: "Which is your main bank?",
      value: (
        <FormControl variant="outlined">
          <InputLabel id="bank-label">Select bank</InputLabel>
          <Select
            labelId="bank-label"
            value={mainBank}
            onChange={(event) => {setMainBank(event.target.value)}}
            label="Select bank"
          >
            {bankOptions.map((bankOption) => (
              <MenuItem key={bankOption} value={bankOption}>
                {bankOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
    {
      key: "How long ago did you make your first commercial sale?:",
      value: (
        <FormControl className="employment-status-field" variant="outlined">
          <InputLabel id="employment-status-label">
            How long ago did you make your first commercial sale?
          </InputLabel>
          <Select
            labelId="employment-status-label"
            value={commercialSale}
            onChange={(event) => {
              setCommercialSale(event.target.value);
            }}
            label="How long ago did you make your first commercial sale?"
          >
            <MenuItem value={"6months"}>0 - 6 months</MenuItem>
            <MenuItem value={"12months"}>6 months - 1 year</MenuItem>
            <MenuItem value={"24months"}>1 - 2 years</MenuItem>
            <MenuItem value={"60months"}>2 - 5 years</MenuItem>
            <MenuItem value={"120months"}>5 - 10 years</MenuItem>
            <MenuItem value={"121months"}>10+ years</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      key: "What was your turnover in the last financial year?",
      value: <TextField label="" variant="outlined" />,
    },
    {
      key: "What was your ARR (annual recurring revenue)?",
      value: <TextField label="" variant="outlined" />,
    },
    {
      key: "Did your business make a profit in the last financial year?",
      value: (
        <FormControl variant="outlined">
          <InputLabel id="profit-label">Select option</InputLabel>
          <Select
            labelId="profit-label"
            value={profitStatus}
            onChange={(event) => {setProfitStatus(event.target.value)}}
            label="Select option"
          >
            <MenuItem value={"had-profit"}>Yes</MenuItem>
            <MenuItem value={"no-profit"}>No</MenuItem>
          </Select>
        </FormControl>
      ),
    },
  ];

  const applicantQuestions = [
    {
      key: "Your name:",
      value: (
        <TextField
          className="name-field"
          name="name"
          label="Your name"
          required
          variant="outlined"
          onChange={handleUserDetailsChange}
          value={userDetails.name}
        />
      ),
    },
    {
      key: "Email:",
      value: (
        <TextField
          className="email-field"
          name="email"
          label="Email"
          required
          type="email"
          variant="outlined"
          onChange={handleUserDetailsChange}
          value={userDetails.email}
        />
      ),
    },
    {
      key: "Are you a homeowner?",
      value: (
        <FormControl variant="outlined">
          <InputLabel id="homeowner-label">Select option</InputLabel>
          <Select
            labelId="homeowner-label"
            value={homeownerStatus}
            onChange={(event) => {setHomeownerStatus(event.target.value)}}
            label="Select option"
          >
            <MenuItem value={"is-homeowner"}>Yes</MenuItem>
            <MenuItem value={"isnt-homeowner"}>No</MenuItem>
          </Select>
        </FormControl>
      ),
    },
  ];

  return (
    <>
      <Header userId={userId} />
      <div className="loan-form-content-wrapper">
        <SectionWrapper title="Your loan application">
          <Typography variant="body1">
            Get customized loan options based on what you tell us. Once your
            loan is funded, we’ll send the money straight to your bank account
            or pay your creditors directly.
          </Typography>
        </SectionWrapper>

        <SectionWrapper title="How much credit do you need?">
          <div className="loan-amount-input">
            <Typography
              variant="body1"
              gutterBottom
              className="loan-amount-label"
            >
              <span className="bold-text">Requested amount:</span>
            </Typography>
            <Typography variant="body1">£</Typography>
            <Input
              className="loan-sum-input"
              value={loanSum}
              variant="filled"
              size="small"
              onChange={handleLoanSumChange}
              inputProps={{
                step: 1000,
                min: 10000,
                max: 100000,
                type: "number",
              }}
            />
          </div>
          <div className="loan-amount-slider">
            <div className="loan-slider">
              <Slider
                aria-label="Loan amount"
                defaultValue={0}
                step={1}
                min={10}
                marks={marks}
                value={sliderValue}
                onChange={handleSliderValueChange}
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper title="About your company">
          <FormColumns listItems={companyQuestions} />
        </SectionWrapper>

        <SectionWrapper title="About you">
          <FormColumns listItems={applicantQuestions} />
        </SectionWrapper>

        <SectionWrapper title="Share your financial data">
          <Typography variant="body1">
            Share your accounting data so we can verify the information above.
          </Typography>

          {activeConnectionsAvailable ? (
            <CompanyConnections userId={userId} />
          ) : (
            <div className="connection-prompt-wrapper">
              <Typography variant="body1">
                If you connect your accounting platform, we will be able to
                approve your loan faster.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleModalToggle}
              >
                Connect
              </Button>
            </div>
          )}
        </SectionWrapper>

        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{ mb: 3 }}
          onClick={handleApplication}
        >
          Submit application
        </Button>
      </div>

      {
        open && <div className="Modal">
            <CodatLink
              companyId={userId}
              onSuccess={(newConnectionId) => {
                setConnections([...connections, newConnectionId.connectionId]);
                onConnectionLinked()
              }}
              onClose={() => reset()}
              onError={(error) => {
                handleModalToggle();
                alert(error);
              }}
            />
          </div>
      }

       <h3>Connection IDs</h3>

      {
        connections.length >= 1
        ? connections.map((id, i)=><div key={i}>{id}</div>)
        : <div>No connections</div>
      }

      {/* <IntegrationsModal */}
      {/*   isModalOpen={modalOpen} */}
      {/*   handleModalToggle={handleModalToggle} */}
      {/*   userId={userId} */}
      {/*   onConnectionLinked={onConnectionLinked} */}
      {/* /> */}
    </>
  );
};

LoanForm.propTypes = {
  setUserDetails: PropTypes.func.isRequired,
};

export default LoanForm;
