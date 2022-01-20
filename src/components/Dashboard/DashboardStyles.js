import styled, { createGlobalStyle, keyframes } from "styled-components";
import dashboardBackground from "assets/img/bg-dashboard.png";
import { Button } from "components/AppStyles";

export const DashboardSpecificGlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${dashboardBackground}');
  }
`;

export const MainContainer = styled.main`
  width: ${({ theme }) => theme.breakpoints.desktop};
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding: 10px 4% 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px 3% 20px;
  }
`;

export const DashboardContainer = styled(MainContainer)`
  ${({ hidden }) => hidden && "display: none;"}
`;

export const DashboardMessage = styled.aside`
  position: absolute;
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 40px;
  text-align: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url("${dashboardBackground}");

  p,
  img {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px 4% 30px;

    p,
    img {
      margin-bottom: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 3% 20px;

    p,
    img {
      margin-bottom: 15px;
    }
  }
`;

export const PageErrorMessage = styled.aside`
  position: absolute;
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 318px;
  transform: translate(-50%, -50%);
  text-align: center;

  img {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 20px;
  }

  ${Button} {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 15px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 300px;
  }
`;

export const PageTitle = styled.h1`
  margin-right: auto;
  font-size: ${({ theme }) => theme.fonts.bigSize};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
    font-size: ${({ theme }) => theme.fonts.mobileBigSize};
    text-align: center;
  }
`;

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    ${PageTitle} {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fonts.mobileSmallSize};
  }
`;
