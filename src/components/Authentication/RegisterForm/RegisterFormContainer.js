import { connect } from 'react-redux';
import { clearAuthErrorMessage, register } from 'state/modules/auth';
import RegisterForm from './RegisterForm';

function mapStateToProps(state) {
  return {
    authErrorMessage: state.auth.authErrorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearAuthErrorMessage: () => dispatch(clearAuthErrorMessage()),
    register: (username, password) => dispatch(register(username, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
