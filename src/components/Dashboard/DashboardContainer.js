import { connect } from 'react-redux';
import Dashboard from './Dashboard';

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  };
}

export default connect(mapStateToProps, null)(Dashboard);
