import { connect } from 'react-redux';
import { getVillagers } from 'state/modules/villagers';
import { getVillageInfo } from 'state/modules/villages';
import Villagers from './Villagers';

function mapStateToProps(state) {
  return {
    villagers: state.villagers.villagers,
    villagersErrorMessage: state.villagers.villagersErrorMessage,
    lastRequestedVillage: state.villages.lastRequestedVillage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVillagers: (villageId) => dispatch(getVillagers(villageId)),
    getVillageInfo: (villageId) => dispatch(getVillageInfo(villageId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Villagers);
