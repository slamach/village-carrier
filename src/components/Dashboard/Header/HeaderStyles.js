import { Link } from "react-router-dom";
import styled from "styled-components";
import dashboardBackground from "assets/img/bg-dashboard.png";

export const MobileMenuButton = styled.button`
  position: relative;
  display: none;
  width: 30px;
  height: 21px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  span,
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 30px;
    height: 3px;
    background-color: #ffffff;
  }

  span {
    top: 9px;

    ${({ active }) =>
      active &&
      `
      display: none;
    `}
  }

  &::before {
    top: 0;

    ${({ active }) =>
      active &&
      `
      top: 9px;
      transform: rotate(45deg);
    `}
  }

  &::after {
    bottom: 0;

    ${({ active }) =>
      active &&
      `
      bottom: 9px;
      transform: rotate(-45deg);
    `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const HeaderLink = styled.a`
  padding: 10px;
  cursor: pointer;
`;

export const MenuItem = styled.li``;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    flex-direction: column;
    overflow-y: auto;
    padding: 20px 4% 30px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.65),
        rgba(0, 0, 0, 0.65)
      ),
      url("${dashboardBackground}");
    background-position: 0 -80px;

    ${({ mobileActive }) =>
      mobileActive &&
      `
      display: flex;
    `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 70px;
    padding: 10px 3% 20px;
    background-position: 0 -70px;
  }

  ${MenuItem} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-right: 0;
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: 25px;
    }
  }
`;

export const StatItem = styled.li`
  position: relative;
  user-select: none;

  ${({ icon, theme }) => {
    if (icon) {
      return `
        padding-left: 45px;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 35px;
          height: 35px;
          transform: translateY(-53%);
          image-rendering: pixelated;
          background-image: url('${icon}');
          background-repeat: no-repeat;
          background-size: auto 100%;
          background-position: center;
        }

        @media (max-width: ${theme.breakpoints.mobile}) {
          padding-left: 35px;

          &::before {
            width: 30px;
            height: 30px;
          }
        }
      `;
    }
  }}
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  ${StatItem} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-right: 15px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-right: 10px;
    }
  }
`;

export const NavLogo = styled(Link)``;

export const NavBar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.breakpoints.desktop};
  padding: 0 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
    width: 100%;
    padding: 0 4%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 5%;
  }

  ${NavLogo} {
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      margin-right: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100px;
    }
  }

  ${StatList} {
    margin-right: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-right: 0;
    }
  }
`;

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme }) => theme.breakpoints.minimum};
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url("${dashboardBackground}");

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 70px;
  }
`;
