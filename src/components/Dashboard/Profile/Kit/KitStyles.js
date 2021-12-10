import { Button } from '../../../AppStyles';
import styled from 'styled-components';
import Item from '../../Offers/Offer/Item/Item';

export const ItemStyled = styled(Item)``;

export const KitGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  gap: 6px;
  list-style: none;
`;

export const KitContainer = styled.div`
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
    margin-bottom: 20px;
  }

  ${Button} {
    width: 100%;
  }
`;
