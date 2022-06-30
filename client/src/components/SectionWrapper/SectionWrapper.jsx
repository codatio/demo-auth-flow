import './SectionWrapper.css';
import { Typography } from '@mui/material';

const SectionWrapper = (props) => (
  <div className="section-wrapper">
    <Typography variant="h4">{props.title}</Typography>
    {props.children}
  </div>
);

export default SectionWrapper;