import Header from '../../components/Header/Header';
import {
  Typography
} from "@mui/material";
import './Dashboard.css'
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { userId } = useParams();

  return (
    <>
      <Header/>
      <div className="dashboard-content-wrapper">
        <div>
          <Typography variant='h3' gutterBottom>
            Your account
          </Typography>
          <div className="list-container">
            <ul className="key-column">
              <li><Typography variant="body1">Name:</Typography></li>
              <li><Typography variant="body1">User ID:</Typography></li>
              <li><Typography variant="body1">Email:</Typography></li>
            </ul>
            <ul className="value-column">
              <li><Typography variant="body1">User_name</Typography></li>
              <li><Typography variant="body1">{ userId }</Typography></li>
              <li><Typography variant="body1">E-mail</Typography></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;