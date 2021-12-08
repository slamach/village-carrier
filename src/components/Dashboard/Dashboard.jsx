import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {
  DashboardSpecificGlobalStyle,
  DashboardContainer,
  DashboardMessage
} from './DashboardStyles';
import Header from './Header/HeaderContainer';
import connectionLost from 'assets/img/connection-lost.png';

const Dashboard = (props) => {
  useEffect(() => {
    if (props.user) {
      props.getUserData();
    }
    // eslint-disable-next-line
  }, []);

  if (!props.user) {
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
      {props.lostConnection ? (
        <DashboardMessage>
          <img src={connectionLost} width="184" height="124" alt="Житель наелся и спит" />
          <p>Упс! Соединение с&nbsp;сервером потеряно.</p>
          <p>Попробуйте обновить страницу.</p>
        </DashboardMessage>
      ) : null}
    </>
  );
};

export default Dashboard;
