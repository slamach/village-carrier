import { connect } from 'react-redux';
import Profile from './Profile';
import { getInventory, makeNewWithdrawal } from 'state/modules/profile';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    inventory: state.profile.inventory
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getInventory: () => dispatch(getInventory()),
    makeNewWithdrawal: () => dispatch(makeNewWithdrawal())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
