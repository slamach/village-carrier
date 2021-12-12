import styled from 'styled-components';
import { Button } from '../../AppStyles';
import { KitsItem } from './Kit/KitStyles';

export const ProfileSectionTitle = styled.h2`
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fonts.defaultSize};
  font-weight: 400;
  text-align: center;
`;

export const InventoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Button} {
    min-width: 350px;
    margin: 25px 0 0;
  }
`;

export const KitsContainer = styled.ul`
  list-style: none;

  ${KitsItem} {
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ProfContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 808px;
  margin: 0 auto;
  padding: 40px 0;
`;
