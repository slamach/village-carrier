import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getUserData } from 'state/modules/profile';

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    loading: state.app.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserData: () => dispatch(getUserData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
