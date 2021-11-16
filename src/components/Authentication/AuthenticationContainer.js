import { connect } from 'react-redux';
import Authentication from './Authentication';

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  };
}

export default connect(
  mapStateToProps,
  null
)(Authentication);
