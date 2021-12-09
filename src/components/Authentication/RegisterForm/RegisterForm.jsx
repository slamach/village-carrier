import { useEffect } from 'react';
import { MenuLink } from '../AuthenticationStyles';
import { useForm } from 'react-hook-form';
import { InputContainer, InputLabel, Input, ErrorMessage } from '../AuthenticationStyles';
import { Button, VisuallyHidden } from '../../AppStyles';

const RegisterForm = (props) => {
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
  const onSubmit = (data) => props.register(data.username, data.password);
  let errorMessage = props.authErrorMessage
    ? props.authErrorMessage
    : errors.username
    ? errors.username.message
    : errors.password
    ? errors.password.message
    : '';

  return (
    <>
      <VisuallyHidden as="h1">Регистрация аккаунта</VisuallyHidden>
      <form
        onSubmit={handleSubmit(onSubmit, props.authErrorMessage && props.clearAuthErrorMessage)}>
        <InputContainer>
          <InputLabel htmlFor="register-username">Имя пользователя</InputLabel>
          <Input
            id="register-username"
            type="text"
            autoComplete="username"
            {...register('username', {
              required: 'Введите имя пользователя и пароль!',
              minLength: {
                value: 4,
                message: 'Имя пользователя должно содержать не менее 4 символов'
              }
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="register-password">Пароль</InputLabel>
          <Input
            id="register-password"
            type="password"
            autoComplete="new-password"
            {...register('password', {
              required: 'Введите имя пользователя и пароль',
              minLength: {
                value: 8,
                message: 'Пароль должнен содержать не менее 8 символов'
              }
            })}
          />
        </InputContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Зарегистрироваться</Button>
      </form>
      <MenuLink to="/auth">Уже есть аккаунт?</MenuLink>
    </>
  );
};

export default RegisterForm;
