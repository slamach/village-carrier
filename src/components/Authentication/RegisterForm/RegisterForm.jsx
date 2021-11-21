import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { InputContainer, InputLabel, Input, Button, ErrorMessage } from '../AuthenticationStyles';

const RegisterForm = (props) => {
  useEffect(() => {
    props.clearAuthErrorMessage();
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputLabel htmlFor="register-username">Имя пользователя</InputLabel>
          <Input
            id="register-username"
            type="text"
            {...register('username', {
              required: 'Введите имя пользователя!',
              minLength: {
                value: 4,
                message: 'Имя пользователя должно содержать не менее 4 символов!'
              }
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="register-password">Пароль</InputLabel>
          <Input
            id="register-password"
            type="password"
            {...register('password', {
              required: 'Введите пароль!',
              minLength: {
                value: 8,
                message: 'Пароль должнен содержать не менее 8 символов!'
              }
            })}
          />
        </InputContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Зарегистрироваться</Button>
      </form>
      <Link to="/auth">Уже есть аккаунт?</Link>
    </>
  );
};

export default RegisterForm;
