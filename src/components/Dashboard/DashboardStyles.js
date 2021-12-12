import styled, { createGlobalStyle } from 'styled-components';
import dashboardBackground from 'assets/img/bg-dashboard.png';
import { Button } from 'components/AppStyles';

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

  ${({ hidden }) => hidden && 'display: none;'}
`;

export const DashboardMessage = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${dashboardBackground}');

  p,
  img {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const PageErrorMessage = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 318px;
  transform: translate(-50%, -50%);

  img {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 20px;
    text-align: center;
  }

  ${Button} {
    width: 100%;
  }
`;
