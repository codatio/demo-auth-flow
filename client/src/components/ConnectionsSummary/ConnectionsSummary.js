import { Typography } from '@mui/material';

const ConnectionsSummary = (props) => {
  if (props.errorMessage) {
    return <Typography>{props.errorMessage}</Typography>;
  }

  return props.companyConnections.length > 0 ? (
    <Typography>
      👌🏻 You have linked the following packages:
      {props.companyConnections.map((companyConnection, index) => {
        return ` ${companyConnection.platformName}${
          props.companyConnections.length - 1 === index ? '' : ', '
        }`;
      })}
    </Typography>
  ) : (
    <Typography>
      👎🏻 You have no active connections. Connect your accounting package so we
      can approve your loan faster.
    </Typography>
  );
};

export default ConnectionsSummary;
