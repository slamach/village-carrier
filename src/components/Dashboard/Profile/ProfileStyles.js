import styled from "styled-components";
import { Button } from "../../AppStyles";

export const ProfileSectionTitle = styled.h2`
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fonts.defaultSize};
  font-weight: 400;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fonts.mobileBigSize};
  }
`;

export const InventoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 35px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 30px;
  }

  ${Button} {
    min-width: 350px;
    margin: 25px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin: 20px 0 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin: 15px 0 0;
    }
  }
`;

export const KitsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  width: 250px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 15px;
    width: 348px;
  }
`;

export const ProfContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 888px;
  margin: 0 auto;
  padding: 40px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin: 0;
    padding: 20px 4% 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 3% 20px;
  }
`;
