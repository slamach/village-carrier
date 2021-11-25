import styled, { createGlobalStyle } from 'styled-components';
import dashboardBackground from 'assets/img/bg-dashboard.png';

export const DashboardSpecificGlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${dashboardBackground}');
  }
`;

export const MainContainer = styled.main`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
`;

export const DashboardContainer = styled(MainContainer)`
  margin-bottom: 40px;
`;
