import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import optionsBackground from '../../assets/img/bg-options.png';
import buttonBackground from '../../assets/img/bg-button.png';

export const AuthSpecificGlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('${optionsBackground}');
  }
`;

export const LongLogo = styled.img`
  display: block;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.menuAddText};
`;

export const Input = styled.input`
  padding: 14px 14px 15px;
  font: inherit;
  color: ${({ theme }) => theme.colors.inputText};
  text-shadow: ${({ theme }) => theme.fonts.textShadow};
  background-color: #000000;
  border: 3px solid ${({ theme }) => theme.colors.menuAddText};

  &:hover,
  &:focus {
    border-color: #ffffff;
  }
`;

export const Button = styled.button`
  padding: 11px 11px 12px;
  font: inherit;
  color: ${({ theme }) => theme.colors.menuText};
  text-shadow: ${({ theme }) => theme.fonts.textShadow};
  background-color: #6d6d6d;
  background-image: url(${buttonBackground});
  border: 3px solid #000000;
  box-shadow: inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.4),
    inset -1.5px -3px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: #ffffff;
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
  width: 441px;
  padding: 40px 60px;
  text-align: center;

  ${LongLogo} {
    margin: 0 auto 35px;
  }

  ${InputContainer} {
    margin-bottom: 30px;
    text-align: left;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${Button} {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
  }

  ${ErrorMessage} {
    text-align: left;
    margin-top: 15px;
  }
`;
