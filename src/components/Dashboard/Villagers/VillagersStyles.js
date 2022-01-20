import styled from 'styled-components';
import { ZoomText } from '../DashboardStyles';

export const VillagersList = styled.ul`
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

export const RaidContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const RaidButtonContainer = styled.div`
  position: relative;
  margin-right: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 10px;
    margin-right: 0;
  }

  ${ZoomText} {
    position: absolute;
    top: 0;
    right: -10px;
  }
`;

export const RaidMessage = styled.p`
  max-width: 300px;
  font-size: ${({ theme }) => theme.fonts.smallSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
`;
