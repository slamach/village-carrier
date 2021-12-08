import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getUserData } from 'state/modules/profile';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.app.loading,
    lostConnection: state.app.lostConnection
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserData: () => dispatch(getUserData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
