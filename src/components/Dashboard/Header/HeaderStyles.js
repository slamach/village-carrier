import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuItem = styled.li``;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  ${MenuItem} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const StatItem = styled.li`
  position: relative;

  ${({ icon }) => {
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
          transform: translateY(-50%);
          image-rendering: pixelated;
          background-image: url('${icon}');
          background-repeat: no-repeat;
          background-size: auto 35px;
          background-position: center;
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
  }
`;

export const NavLogo = styled(Link)``;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  ${NavLogo} {
    margin-right: 20px;
  }
`;

export const StyledHeader = styled.header`
  width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto 15px;
  padding: 20px 40px;

  ${StatList} {
    margin-right: auto;
  }
`;
