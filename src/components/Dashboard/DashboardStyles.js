import styled, { createGlobalStyle, keyframes } from 'styled-components';
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

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.defaultSize};
  font-weight: 400;
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const zoomAnimation = keyframes`
  0% {
    transform:  rotate(15deg) scaleX(1) scaleY(1);
  }
  50% {
    transform:  rotate(15deg) scaleX(1.2) scaleY(1.2);
  }
  100% {
    transform:  rotate(15deg) scaleX(1) scaleY(1);
  }
`;

export const ZoomText = styled.p`
  font-size: ${({ theme }) => theme.fonts.smallSize};
  color: ${({ theme }) => theme.colors.highlight};
  text-shadow: ${({ theme }) => theme.fonts.textShadow};
  user-select: none;
  animation: ${zoomAnimation} linear 0.7s infinite;
`;
