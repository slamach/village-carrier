import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { InputContainer, InputLabel, Input, Button, ErrorMessage } from '../AuthenticationStyles';

const LoginForm = (props) => {
  useEffect(() => {
    props.clearAuthErrorMessage();
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
    ? 'Введите имя пользователя и пароль!'
    : '';

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputLabel htmlFor="login-username">Имя пользователя</InputLabel>
          <Input id="login-username" type="text" {...register('username', { required: true })} />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="login-password">Пароль</InputLabel>
          <Input
            id="login-password"
            type="password"
            {...register('password', { required: true })}
          />
        </InputContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Войти</Button>
      </form>
      <Link to="/auth/register">Нет аккаунта?</Link>
    </>
  );
};

export default LoginForm;
