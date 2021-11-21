import { connect } from 'react-redux';
import { clearAuthErrorMessage, login } from 'state/modules/auth';
import LoginForm from './LoginForm';

function mapStateToProps(state) {
  return {
    authErrorMessage: state.auth.authErrorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearAuthErrorMessage: () => dispatch(clearAuthErrorMessage()),
    login: (username, password) => dispatch(login(username, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
