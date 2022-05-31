import { Typography } from '@mui/material';
import { Fragment } from 'react';
import './ConnectionDisplay.css';

import FlexColumns from '../FlexColumns/FlexColumns';

const ConnectionDisplay = (props) => {
  const title = props.connectionObject.platformName;
  const listItems = [
    {
      key: 'Status',
      value: props.connectionObject.status,
    },
    {
      key: 'Source type',
      value: props.connectionObject.sourceType,
    },
  ];

  return (
    <Fragment>
      <Typography variant="h5">{title}</Typography>
      <FlexColumns listItems={listItems} />
    </Fragment>
  );
};

export default ConnectionDisplay;