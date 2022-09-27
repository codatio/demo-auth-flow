import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import "./FlexColumns.css";

const FlexColumns = (props) => (
  <div
    className={`list-container ${
      props.backgroundActive ? "list-container--background" : ""
    }`}
  >
    <ul className="key-column">
      {props.listItems.map((listItem, index) => (
        <li key={index}>
          <Typography variant="body1">{listItem.key}</Typography>
        </li>
      ))}
    </ul>
    <ul className="value-column">
      {props.listItems.map((listItem, index) => (
        <li key={index}>{listItem.value}</li>
      ))}
    </ul>
  </div>
);

FlexColumns.propTypes = {
  backgroundActive: PropTypes.bool,
  listItems: PropTypes.array.isRequired,
};

export default FlexColumns;
