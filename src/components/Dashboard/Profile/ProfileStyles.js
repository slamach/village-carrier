import styled from 'styled-components';
import { Button } from '../../AppStyles';

export const Username = styled.p`
  text-align: center;
`;

export const ProfContainer = styled.main`
  /* TODO: Сделать адаптивную ширину */
  width: 516px;
  margin: 0 auto;
  padding: 40px 0;

  ${Username} {
    margin-bottom: 25px;
  }

  ${Button} {
    min-width: 350px;
    margin: 25px auto 0;
  }
`;
