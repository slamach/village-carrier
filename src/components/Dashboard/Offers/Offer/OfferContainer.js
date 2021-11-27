import { connect } from 'react-redux';
import { makeNewDeal } from 'state/modules/offers';
import Offer from './Offer';

function mapDispatchToProps(dispatch) {
  return {
    makeNewDeal: (offerId) => dispatch(makeNewDeal(offerId))
  };
}

export default connect(null, mapDispatchToProps)(Offer);
