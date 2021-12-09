import styled from 'styled-components';
import { Button } from '../../AppStyles';

export const Username = styled.p``;

export const ProfContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  ${Username} {
    margin-bottom: 25px;
  }

  ${Button} {
    min-width: 350px;
    margin: 25px 0 0;
  }
`;
