import { useEffect } from 'react';
import { MenuLink } from '../AuthenticationStyles';
import { useForm } from 'react-hook-form';
import { InputContainer, InputLabel, Input, ErrorMessage } from '../AuthenticationStyles';
import { Button, VisuallyHidden } from '../../AppStyles';

const LoginForm = (props) => {
  useEffect(() => {
    return () => {
      props.clearAuthErrorMessage();
    };
    // eslint-disable-next-line
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => props.login(data.username, data.password);
  let errorMessage = props.authErrorMessage
    ? props.authErrorMessage
    : errors.username || errors.password
    ? 'Введите имя пользователя и пароль'
    : '';

  return (
    <>
      <VisuallyHidden as="h1">Вход в аккаунт</VisuallyHidden>
      <form
        onSubmit={handleSubmit(onSubmit, props.authErrorMessage && props.clearAuthErrorMessage)}>
        <InputContainer>
          <InputLabel htmlFor="login-username">Имя пользователя</InputLabel>
          <Input
            id="login-username"
            type="text"
            autoComplete="username"
            {...register('username', { required: true })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="login-password">Пароль</InputLabel>
          <Input
            id="login-password"
            type="password"
            autoComplete="current-password"
            {...register('password', { required: true })}
          />
        </InputContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Войти</Button>
      </form>
      <MenuLink to="/auth/register">Нет аккаунта?</MenuLink>
    </>
  );
};

export default LoginForm;
