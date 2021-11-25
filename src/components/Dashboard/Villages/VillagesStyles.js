import styled from 'styled-components';
import { Link } from 'react-router-dom';
import house1 from 'assets/img/house1.png';
import house2 from 'assets/img/house2.png';
import house3 from 'assets/img/house3.png';

export const VillagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  list-style: none;
`;

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
  box-shadow: 4px 0 0 0 #555555, 0 4px 0 0 #555555, 2px 2px 0 0 #555555, -4px 0 0 0 #e8e8e8,
    0 -4px 0 0 #e8e8e8, -2px -2px 0 0 #e8e8e8, 0 0 0 2px #b5b4b5, 2px 4px 0 0 #555, 4px 2px 0 0 #555,
    -2px -4px 0 0 #e8e8e8, -4px -2px 0 0 #e8e8e8, 4px -2px 0 0 #000000, 2px -4px 0 0 #000000,
    -4px 2px 0 0 #000000, -2px 4px 0 0 #000000, -4px -4px 0 0 #000000, 4px 4px 0 0 #000000,
    -6px 0 0 0 #000000, -6px -2px 0 0 #000000, 6px 0 0 0 #000000, 6px 2px 0 0 #000000,
    0 -6px 0 0 #000000, -2px -6px 0 0 #000000, 0 6px 0 0 #000000, 2px 6px 0 0 #000000;

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
    box-shadow: 4px 0 0 0 #555555, 0 4px 0 0 #555555, 2px 2px 0 0 #555555, -4px 0 0 0 #e8e8e8,
      0 -4px 0 0 #e8e8e8, -2px -2px 0 0 #e8e8e8, 0 0 0 2px #b5b4b5, 2px 4px 0 0 #555,
      4px 2px 0 0 #555, -2px -4px 0 0 #e8e8e8, -4px -2px 0 0 #e8e8e8, 4px -2px 0 0 #ffffff,
      2px -4px 0 0 #ffffff, -4px 2px 0 0 #ffffff, -2px 4px 0 0 #ffffff, -4px -4px 0 0 #ffffff,
      4px 4px 0 0 #ffffff, -6px 0 0 0 #ffffff, -6px -2px 0 0 #ffffff, 6px 0 0 0 #ffffff,
      6px 2px 0 0 #ffffff, 0 -6px 0 0 #ffffff, -2px -6px 0 0 #ffffff, 0 6px 0 0 #ffffff,
      2px 6px 0 0 #ffffff;
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
