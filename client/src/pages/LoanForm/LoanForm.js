import React from 'react'
import { Typography, TextField, Slider, FormControl, Select, InputLabel, MenuItem, Input } from "@mui/material"
import Header from "../../components/Header/Header"
import "./LoanForm.css"
import FlexColumns from '../../components/FlexColumns/FlexColumns';

const LoanForm = () => {
  const [empStatus, setEmpStatus] = React.useState('');
  const [loanSum, setLoanSum] = React.useState(10);

  const handleEmpSelection = (event) => {
    setEmpStatus(event.target.value);
  };

  const handleLoanSumChange = (event) => {
    setLoanSum(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleLoanSumSlider = (event, newValue) => {
    setLoanSum(newValue);
  };

  const scaleLoanValue = (loanValue) => loanValue * 1000;

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
    }
  ];

  const listItems = [
    {
      key: "Name:",
      value: <TextField label="Name" variant="filled" />
    },
    {
      key: "Employment status:",
      value: (
        <FormControl className="employment-status-field" variant="filled">
          <InputLabel id="employment-status-label">Employment status</InputLabel>
          <Select
            labelId="employment-status-label"
            value={empStatus}
            onChange={handleEmpSelection}
          >
            <MenuItem value={'employed'}>Employed</MenuItem>
            <MenuItem value={'unemployed'}>Unemployed</MenuItem>
          </Select>
        </FormControl>
      )
    }
  ]

  return (
    <>
      <Header />
      <div className="loan-form-content-wrapper">
        <div>
          <Typography variant="h3" gutterBottom>
            Your loan application
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <div className="contact-information-wrapper">
          <Typography variant="h4">
            Contact information
          </Typography>
          <FlexColumns listItems={listItems}/>
        </div>
        <div className="loan-amount-wrapper">
          <Typography variant="h4" gutterBottom>
            Loan details
          </Typography>
          <div className="loan-amount-slider">
            <Typography className="loan-slider-label" variant="body1" gutterBottom>
              Loan amount
            </Typography>
            <div className="loan-slider">
              <Slider
                aria-label="Loan amount"
                defaultValue={0}
                step={10}
                marks={marks}
                value={typeof loanSum === 'number' ? loanSum : 0}
                onChange={handleLoanSumSlider}
                scale={scaleLoanValue}
              />
              <Input
                value={loanSum}
                size="small"
                onChange={handleLoanSumChange}
                inputProps={{
                  step: 10,
                  min: 10,
                  max: 100,
                  type: 'number',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoanForm;