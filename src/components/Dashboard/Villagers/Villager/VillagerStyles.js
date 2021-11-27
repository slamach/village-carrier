import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VillageLink = styled(Link)`
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const VillagesItem = styled.li`
  position: relative;
  padding: 10px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainText};
  text-shadow: none;
  background-color: #c6c6c6;
  box-shadow: ${({ theme }) => theme.elements.containerShadow};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.elements.containerShadowHover};
  }

  img {
    margin: 10px 0;
  }

  h2 {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fonts.defaultSize};
    font-weight: 400;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.smallSize};
  }
`;