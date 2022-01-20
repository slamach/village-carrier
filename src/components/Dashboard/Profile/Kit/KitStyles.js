import { Button } from "../../../AppStyles";
import styled from "styled-components";

export const KitGrid = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;

  li {
    margin-right: 6px;
    margin-bottom: 6px;

    &:last-child,
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`;

export const KitsItem = styled.li`
  padding: 15px 20px;
  background-color: #c6c6c6;
  box-shadow: ${({ theme }) => theme.elements.containerShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 15px 15%;
  }

  h3 {
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fonts.defaultSize};
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.mainText};
    text-shadow: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 10px;
      font-size: ${({ theme }) => theme.fonts.mobileDefaultSize};
    }
  }

  ${KitGrid} {
    margin-bottom: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: 5px;
    }
  }

  ${Button} {
    width: 100%;
  }
`;
