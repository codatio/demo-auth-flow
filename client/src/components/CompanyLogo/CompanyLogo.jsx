import CompanyLogoImage from '../../assets/images/copay-logo.png';
import './CompanyLogo.css';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const CompanyLogo = () => {
  return (
    <Link to={routes.home}>
      <img
        className="company-logo"
        alt="copay-company-logo"
        src={CompanyLogoImage}
      />
    </Link>
  );
};

export default CompanyLogo;
