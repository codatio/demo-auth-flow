import { Typography, TextField, Slider } from "@mui/material"
import Header from "../../components/Header/Header"
import "./LoanForm.css"

const LoanForm = () => {
  const marks = [
    {
      value: 0,
      label: '0£',
    },
    {
      value: 10,
      label: '10000£',
    },
    {
      value: 50,
      label: '50000£',
    },
    {
      value: 100,
      label: '100000£',
    }
  ];

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
          <div className="contact-information-form">
            <ul className="key-column">
              <li>
                <Typography variant="body1">
                  Name
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Employment status
                </Typography>
              </li>
            </ul>
            <ul className="value-column">
              <li>
                <TextField label="Name" variant="filled" />
              </li>
              <li>
                <TextField label="Employment" variant="filled" />
              </li>
            </ul>
          </div>
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoanForm;