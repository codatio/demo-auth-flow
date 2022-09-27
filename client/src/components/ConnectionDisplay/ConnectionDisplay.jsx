import { Typography } from "@mui/material";
import { Fragment } from "react";
import PropTypes from "prop-types";

import FlexColumns from "../FlexColumns/FlexColumns";

const ConnectionDisplay = (props) => {
  const title = props.connectionObject.platformName;
  const listItems = [
    {
      key: "Status",
      value: (
        <Typography variant="body1">{props.connectionObject.status}</Typography>
      ),
    },
    {
      key: "Source type",
      value: (
        <Typography variant="body1">
          {props.connectionObject.sourceType}
        </Typography>
      ),
    },
  ];

  return (
    <Fragment>
      <Typography variant="h5">{title}</Typography>
      <FlexColumns
        listItems={listItems}
        backgroundActive={props.backgroundActive}
      />
    </Fragment>
  );
};

ConnectionDisplay.propTypes = {
  connectionObject: PropTypes.object.isRequired,
  backgroundActive: PropTypes.bool,
};

export default ConnectionDisplay;
