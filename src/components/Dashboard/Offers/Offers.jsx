import { useEffect } from 'react';
import { useParams } from 'react-router';
import { OffersList } from './OffersStyles';
import Offer from './Offer/Offer';

const Offers = (props) => {
  let { villagerId } = useParams();
  useEffect(() => {
    props.getOffers(villagerId);
    // eslint-disable-next-line
  }, []);

  return (
    <OffersList>
      {props.offers.map((offer) => (
        <Offer key={offer.offerId} {...offer} />
      ))}
    </OffersList>
  );
};

export default Offers;
