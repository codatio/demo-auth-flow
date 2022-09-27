import "./Header.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

const Header = (props) => {
  const navigate = useNavigate();
  const { userId } = props;

  const goToProfile = () => {
    navigate(routes.dashboard(userId));
  };

  const goToHome = () => {
    const search = userId ? `?userId=${userId}` : "";
    navigate({ pathname: routes.home, search });
  };

  return (
    <header className="main-header">
      <CompanyLogo onClick={goToHome} />
      {userId && <Button onClick={goToProfile}>My profile</Button>}
    </header>
  );
};

export default Header;
