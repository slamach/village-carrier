import { Navigate, Outlet } from 'react-router-dom';

const Dashboard = (props) => {
  if (!props.loggedIn) {
    return <Navigate to="/auth" />;
  }

  return (
    <>
      <p>Dashboard</p>
      <Outlet />
    </>
  );
};

export default Dashboard;
