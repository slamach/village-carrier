import { connect } from 'react-redux';
import Authentication from './Authentication';

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps, null)(Authentication);
