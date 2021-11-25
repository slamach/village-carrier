import { Navigate, Outlet } from 'react-router-dom';
import { DashboardSpecificGlobalStyle } from './DashboardStyles';
import Header from './Header/HeaderContainer';
import { DashboardContainer } from './DashboardStyles';

const Dashboard = (props) => {
  if (!props.loggedIn) {
    return <Navigate to="/auth" />;
  }

  return (
    <>
      <DashboardSpecificGlobalStyle />
      <Header />
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
