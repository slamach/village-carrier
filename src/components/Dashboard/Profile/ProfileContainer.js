import { connect } from 'react-redux';
import Profile from './Profile';
import { getInventory, makeNewWithdrawal, getKits } from 'state/modules/profile';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    inventory: state.profile.inventory,
    kits: state.profile.kits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getInventory: () => dispatch(getInventory()),
    makeNewWithdrawal: () => dispatch(makeNewWithdrawal()),
    getKits: () => dispatch(getKits())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
