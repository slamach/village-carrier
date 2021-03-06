import { ItemAmount } from "components/Dashboard/Offers/Offer/Item/ItemStyles";
import styled from "styled-components";

export const InventoryLabel = styled.p`
  color: ${({ theme }) => theme.colors.mainText};
  text-shadow: none;
`;

export const InventoryContainer = styled.div`
  padding: 20px;
  background-color: #c6c6c6;
  box-shadow: ${({ theme }) => theme.elements.containerShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 15px;
  }

  ${InventoryLabel} {
    margin-bottom: 10px;
  }
`;

export const InventoryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(9, 48px);
  gap: 6px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(6, 48px);
  }
`;

export const InventoryItem = styled.li`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.slotBackground};
  box-shadow: ${({ theme }) => theme.elements.inventorySlotShadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.slotBackgroundHover};
    }
  }

  ${ItemAmount} {
    bottom: -2px;
    right: -2px;
  }
`;
