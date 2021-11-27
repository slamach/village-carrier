import styled from 'styled-components';
import { Link } from 'react-router-dom';
import house1 from 'assets/img/house1.png';
import house2 from 'assets/img/house2.png';
import house3 from 'assets/img/house3.png';

export const VillageLink = styled(Link)`
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const VillagesItem = styled.li`
  position: relative;
  padding: 180px 20px 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainText};
  text-shadow: none;
  background-image: url('${house1}');
  background-repeat: no-repeat;
  background-position: center 10px;
  background-color: #c6c6c6;
  box-shadow: ${({ theme }) => theme.elements.containerShadow};

  &:nth-child(3n + 1) {
    background-image: url('${house1}');
  }

  &:nth-child(3n + 2) {
    background-image: url('${house2}');
  }

  &:nth-child(3n) {
    background-image: url('${house3}');
  }

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.elements.containerShadowHover};
  }

  h2 {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fonts.defaultSize};
    font-weight: 400;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.smallSize};
  }
`;
