import { Typography } from "@mui/material";
import { Fragment } from "react";
import PropTypes from "prop-types";

import FlexColumns from "../FlexColumns/FlexColumns";

const ConnectionDisplay = ({connectionObject, backgroundActive}) => {
  const listItems = [
    {
      key: "Data source",
      value: (
        <Typography variant="body1">{connectionObject.platformName}</Typography>
      ),
    },
    {
      key: "Data category",
      value: (
        <Typography variant="body1">
          {connectionObject.sourceType}
        </Typography>
      ),
    },
    {
      key: "Connection status",
      value: (
        <Typography variant="body1">{connectionObject.status}</Typography>
      ),
    },
  ];

  return (
    <Fragment>
      <FlexColumns
        listItems={listItems}
        backgroundActive={backgroundActive}
      />
    </Fragment>
  );
};

ConnectionDisplay.propTypes = {
  connectionObject: PropTypes.object.isRequired,
  backgroundActive: PropTypes.bool,
};

export default ConnectionDisplay;
