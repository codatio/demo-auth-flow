import CompanyLogoImage from '../../assets/images/copay-logo.png'
import './CompanyLogo.css'

const CompanyLogo = () => {
  return (
    <img className="company-logo" alt="copay-company-logo" src={CompanyLogoImage}/>
  )
}

export default CompanyLogo;