import { connect } from 'react-redux';
import { logout } from 'state/modules/auth';
import Header from './Header';

function mapStateToProps(state) {
  return {
    userEmeralds: state.profile.userEmeralds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
