import Header from '../../components/Header/Header';
import {
  Typography
} from "@mui/material";
import "./Dashboard.css";
import FlexColumns from '../../components/FlexColumns/FlexColumns';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { userId } = useParams();

  const listItems = [
    {
      key: "Name:",
      value: <Typography variant="body1">User name</Typography>,
    },
    {
      key: "User e-mail:",
      value: <Typography variant="body1">email@company.com</Typography>
    },
    {
      key: "User ID:",
      value: <Typography variant="body1">{userId}</Typography>
    }
  ]

  return (
    <>
      <Header/>
      <div className="dashboard-content-wrapper">
        <div>
          <Typography variant='h3' gutterBottom>
            Your account
          </Typography>
          <FlexColumns listItems={listItems}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard;