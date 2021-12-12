import { connect } from 'react-redux';
import { getOffers, getVillagerInfo } from 'state/modules/offers';
import Offers from './Offers';

function mapStateToProps(state) {
  return {
    offers: state.offers.offers,
    offersErrorMessage: state.offers.offersErrorMessage,
    lastRequstedVillager: state.offers.lastRequstedVillager
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOffers: (villagerId) => dispatch(getOffers(villagerId)),
    getVillagerInfo: (villagerId) => dispatch(getVillagerInfo(villagerId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
