import { Navigate, Outlet } from 'react-router-dom';

const Authentication = (props) => {
  if (props.loggedIn) {
    return (
      <Navigate to="/" />
    );
  }

  return (
    <>
      <p>Authentication</p>
      <Outlet />
    </>
  );
}

export default Authentication;
