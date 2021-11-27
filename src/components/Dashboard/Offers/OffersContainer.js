import { connect } from 'react-redux';
import { getOffers } from 'state/modules/offers';
import Offers from './Offers';

function mapStateToProps(state) {
  return {
    offers: state.offers.offers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOffers: (villagerId) => dispatch(getOffers(villagerId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
