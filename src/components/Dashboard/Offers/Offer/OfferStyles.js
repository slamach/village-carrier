import { Button } from 'components/AppStyles';
import styled from 'styled-components';

export const ItemsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    min-width: 53px;
    image-rendering: pixelated;
  }
`;

export const OffersItem = styled.li`
  padding: 15px 40px;
  background-color: #c6c6c6;
  box-shadow: ${({ theme }) => theme.elements.containerShadow};

  ${ItemsRow} {
    margin-bottom: 10px;
  }

  ${Button} {
    width: 100%;
  }
`;
