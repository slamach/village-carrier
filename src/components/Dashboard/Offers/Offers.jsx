import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { OffersList } from './OffersStyles';
import Offer from './Offer/OfferContainer';
import { PageErrorMessage } from '../DashboardStyles';
import { Button } from '../../AppStyles';
import defaultVillager from 'assets/img/villager-default.png';

const Offers = (props) => {
  let { villagerId } = useParams();
  useEffect(() => {
    props.getOffers(villagerId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!props.offersErrorMessage && props.offers.length > 0 ? (
        <OffersList>
          {props.offers.map((offer) => (
            <Offer key={offer.offerId} {...offer} />
          ))}
        </OffersList>
      ) : (
        <PageErrorMessage>
          <img
            src={defaultVillager}
            width="77"
            height="154"
            alt="Пустая страница предложений жителя"
          />
          <p>
            {props.offersErrorMessage
              ? props.offersErrorMessage
              : 'Упс! Кажется, у жителя совсем нет предложений.'}
          </p>
          <Button as={Link} to="/">
            К деревням
          </Button>
        </PageErrorMessage>
      )}
    </>
  );
};

export default Offers;
