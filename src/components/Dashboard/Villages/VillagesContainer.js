import { connect } from 'react-redux';
import { getVillages } from 'state/modules/villages';
import Villages from './Villages';

function mapStateToProps(state) {
  return {
    villages: state.villages.villages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVillages: () => dispatch(getVillages())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Villages);
