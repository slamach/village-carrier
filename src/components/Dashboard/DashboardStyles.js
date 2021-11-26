import styled, { createGlobalStyle } from 'styled-components';
import dashboardBackground from 'assets/img/bg-dashboard.png';

export const DashboardSpecificGlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${dashboardBackground}');
  }
`;

export const MainContainer = styled.main`
  width: ${({ theme }) => theme.breakpoints.desktop};
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px 40px;
`;

export const DashboardContainer = styled(MainContainer)`
  margin-bottom: 40px;
`;

export const DashboardMessage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${dashboardBackground}');

  p {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
