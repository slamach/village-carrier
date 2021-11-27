import { connect } from 'react-redux';
import { getVillagers } from 'state/modules/villagers';
import Villagers from './Villagers';

function mapStateToProps(state) {
  return {
    villagers: state.villagers.villagers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVillagers: (villageId) => dispatch(getVillagers(villageId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Villagers);
