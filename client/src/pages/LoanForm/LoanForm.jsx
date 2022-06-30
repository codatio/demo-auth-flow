import { useState } from 'react';
import { useParams } from 'react-router-dom';
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
} from '@mui/material';
import './LoanForm.css';
//Components
import Header from '../../components/Header/Header';
import FlexColumns from '../../components/FlexColumns/FlexColumns';
import IntegrationsModal from '../../components/IntegrationsModal/IntegrationsModal';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

const LoanForm = () => {
  const { userId } = useParams();
  const [empStatus, setEmpStatus] = useState('');
  const [loanSum, setLoanSum] = useState(10000);
  const sliderValue = loanSum / 1000;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEmpSelection = (event) => {
    setEmpStatus(event.target.value);
  };

  const handleSliderValueChange = (event, newValue) => {
    setLoanSum(newValue * 1000);
  };

  const handleLoanSumChange = (event) => {
    setLoanSum(event.target.value);
  };

  const marks = [
    {
      value: 10,
      label: '£10000',
    },
    {
      value: 50,
      label: '£50000',
    },
    {
      value: 100,
      label: '£100000',
    },
  ];

  const listItems = [
    {
      key: 'Name:',
      value: <TextField className="name-field" label="Name" variant="filled" />,
    },
    {
      key: 'Employment status:',
      value: (
        <FormControl className="employment-status-field" variant="filled">
          <InputLabel id="employment-status-label">
            Employment status
          </InputLabel>
          <Select
            labelId="employment-status-label"
            value={empStatus}
            onChange={handleEmpSelection}
          >
            <MenuItem value={'employed'}>Employed</MenuItem>
            <MenuItem value={'unemployed'}>Unemployed</MenuItem>
          </Select>
        </FormControl>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="loan-form-content-wrapper">
        <SectionWrapper title="Your loan application">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </SectionWrapper>
        <SectionWrapper title="Contact information">
          <FlexColumns listItems={listItems} />
        </SectionWrapper>
        <SectionWrapper title="Loan details">
          <div className="loan-amount-input">
            <Typography
              variant="body1"
              gutterBottom
              className="loan-amount-label"
            >
              <span className="bold-text">Loan amount:</span>
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
                type: 'number',
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

        <div className="connection-prompt-wrapper">
          <Typography variant="body1">
            If you connect your accounting platform, we will be able to approve
            your loan faster.
          </Typography>
          <Button variant="outlined" color="accent" onClick={handleModalToggle}>
            Connect
          </Button>
        </div>
        <Button variant="contained" size="large" color="primary" sx={{ mb: 3 }}>
          Submit application
        </Button>
      </div>
      <IntegrationsModal
        isModalOpen={isModalOpen}
        handleModalToggle={handleModalToggle}
        userId={userId}
      />
    </>
  );
};

export default LoanForm;