import "./SectionWrapper.css";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const SectionWrapper = (props) => (
  <div className="section-wrapper">
    <Typography variant="h4">{props.title}</Typography>
    {props.children}
  </div>
);

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionWrapper;
