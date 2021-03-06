import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import optionsBackground from "assets/img/bg-options.png";
import { Button } from "../AppStyles";

export const AuthSpecificGlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('${optionsBackground}');
  }
`;

export const LongLogo = styled.img`
  display: block;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.menuAddText};
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 14px 15px;
  font: inherit;
  color: ${({ theme }) => theme.colors.inputText};
  text-shadow: ${({ theme }) => theme.fonts.textShadow};
  background-color: #000000;
  border: 3px solid ${({ theme }) => theme.colors.menuAddText};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:hover,
    &:focus {
      border-color: #ffffff;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${InputLabel} {
    margin-bottom: 10px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fonts.smallSize};
  color: ${({ theme }) => theme.colors.error};

  ${InputLabel} {
    margin-bottom: 10px;
  }
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.menuAddText};
`;

export const AuthContainer = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 325px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 300px;
  }

  ${LongLogo} {
    margin: 0 auto 25px;
  }

  ${InputContainer} {
    margin-bottom: 20px;
    text-align: left;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${Button} {
    margin-top: 20px;
    margin-bottom: 15px;
    width: 100%;
  }

  ${ErrorMessage} {
    text-align: left;
    margin-top: 15px;
  }
`;
