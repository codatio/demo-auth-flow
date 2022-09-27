import CompanyLogoImage from "../../assets/images/copay-logo.png";
import "./CompanyLogo.css";

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

export default CompanyLogo;
