import { Button } from '../../../AppStyles';
import styled from 'styled-components';

export const KitGrid = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;

  li {
    margin-right: 6px;
    margin-bottom: 6px;

    &:last-child,
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`;

export const KitsItem = styled.li`
  max-width: 250px;
  padding: 10px 20px;
  background-color: #c6c6c6;
  box-shadow: ${({ theme }) => theme.elements.containerShadow};

  h3 {
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fonts.defaultSize};
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.mainText};
    text-shadow: none;
  }

  ${KitGrid} {
    margin-bottom: 14px;
  }

  ${Button} {
    width: 100%;
  }
`;
