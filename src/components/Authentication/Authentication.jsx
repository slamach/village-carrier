import { Navigate, Outlet } from 'react-router-dom';
import { AuthSpecificGlobalStyle, AuthContainer, LongLogo } from './AuthenticationStyles';
import longLogo from 'assets/img/logo-long.svg';

const Authentication = (props) => {
  if (props.user) {
    return <Navigate to="/" />;
  }

  return (
    <AuthContainer>
      <AuthSpecificGlobalStyle />
      <LongLogo src={longLogo} width="247" height="24" alt="Village Carrier" />
      <Outlet />
    </AuthContainer>
  );
};

export default Authentication;
