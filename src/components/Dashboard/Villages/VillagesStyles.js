import styled from "styled-components";

export const VillagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
