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
      value: "User name"
    },
    {
      key: "User e-mail:",
      value: "email@company.com"
    },
    {
      key: "User ID:",
      value: userId
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