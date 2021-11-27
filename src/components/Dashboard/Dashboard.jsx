import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {
  DashboardSpecificGlobalStyle,
  DashboardContainer,
  DashboardMessage
} from './DashboardStyles';
import Header from './Header/HeaderContainer';

const Dashboard = (props) => {
  useEffect(() => {
    if (props.loggedIn) {
      props.getUserData();
    }
    // eslint-disable-next-line
  }, []);

  if (!props.loggedIn) {
    return <Navigate to="/auth" />;
  }

  // TODO: Сделать вывод ошибок

  return (
    <>
      <DashboardSpecificGlobalStyle />
      <Header />
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
      {props.loading ? (
        <DashboardMessage>
          <p>Загрузка приложения</p>
          <p>Получения данных с сервера</p>
        </DashboardMessage>
      ) : null}
    </>
  );
};

export default Dashboard;
