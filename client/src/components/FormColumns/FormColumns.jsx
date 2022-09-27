import { Typography } from "@mui/material";
import PropTypes from "prop-types";

import "./FormColumns.css";

const FormColumns = (props) => (
  <div className="form-list-container">
    <div>
      {props.listItems.map((listItem, index) => (
        <div className="form-row" key={index}>
          <div className="form-key">
            <Typography variant="body1">{listItem.key}</Typography>
          </div>
          <div className="form-value">{listItem.value}</div>
        </div>
      ))}
    </div>
  </div>
);

FormColumns.propTypes = {
  listItems: PropTypes.array.isRequired,
};

export default FormColumns;
