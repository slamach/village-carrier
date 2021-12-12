import styled from 'styled-components';
import { ZoomText } from '../DashboardStyles';

export const VillagersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  list-style: none;
`;

export const RaidButtonContainer = styled.div`
  position: relative;

  ${ZoomText} {
    position: absolute;
    top: 0;
    right: -10px;
  }
`;
