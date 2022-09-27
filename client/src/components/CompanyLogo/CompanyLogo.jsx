import CompanyLogoImage from "../../assets/images/copay-logo.png";
import "./CompanyLogo.css";
import PropTypes from "prop-types";

const CompanyLogo = (props) => {
  return (
    <img
      className="company-logo"
      alt="copay-company-logo"
      src={CompanyLogoImage}
      onClick={props.onClick}
    />
  );
};

CompanyLogo.propTypes = {
  onClick: PropTypes.func,
};

export default CompanyLogo;
