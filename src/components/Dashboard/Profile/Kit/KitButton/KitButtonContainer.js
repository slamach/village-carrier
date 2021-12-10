import { connect } from 'react-redux';
import KitButton from './KitButton';
import { obtainKit } from 'state/modules/profile';

function mapDispatchToProps(dispatch) {
  return {
    obtainKit: (kitId) => dispatch(obtainKit(kitId))
  };
}

export default connect(null, mapDispatchToProps)(KitButton);
