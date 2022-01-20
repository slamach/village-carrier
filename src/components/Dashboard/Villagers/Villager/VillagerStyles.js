import styled from "styled-components";
import { Link } from "react-router-dom";

export const VillagerLink = styled(Link)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const VillagersItem = styled.li`
  position: relative;
  padding: 20px 20px 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainText};
  text-shadow: none;
  background-color: #c6c6c6;
  box-shadow: ${({ theme }) => theme.elements.containerShadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.elements.containerShadowHover};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 15px 15px 10px;
  }

  img {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fonts.defaultSize};
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 5px;
      font-size: ${({ theme }) => theme.fonts.mobileDefaultSize};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fonts.smallSize};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fonts.mobileSmallSize};
    }
  }
`;
