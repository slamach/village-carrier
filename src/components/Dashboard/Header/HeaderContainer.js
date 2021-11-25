import { connect } from 'react-redux';
import { logout } from 'state/modules/auth';
import Header from './Header';

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(null, mapDispatchToProps)(Header);
