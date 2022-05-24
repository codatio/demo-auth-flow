import {
  Typography
} from "@mui/material";

import "./FlexColumns.css"

const FlexColumns = (props) => (
  <div className="list-container">
    <ul className="key-column">
      {props.listItems.map((listItem) => (
        <li>
          <Typography variant="body1">
            {listItem.key}
          </Typography>
        </li>
      ))}
    </ul>
    <ul className="value-column">
      {props.listItems.map((listItem) => (
        <li>
          {listItem.value}
        </li>
      ))}
    </ul>
  </div>
)

export default FlexColumns;