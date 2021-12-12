import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  OffersList,
  ReputationContainer,
  ReputationBar,
  ReputationBarFullRow
} from './OffersStyles';
import Offer from './Offer/OfferContainer';
import { PageErrorMessage, PageHeader, PageTitle } from '../DashboardStyles';
import { Button } from '../../AppStyles';
import defaultVillager from 'assets/img/villager-default.png';
import emptyReputationBar from 'assets/img/trading-xp-empty.png';
import fullReputationBar from 'assets/img/trading-xp-full.png';

const Offers = (props) => {
  let { villagerId } = useParams();
  useEffect(() => {
    props.getOffers(villagerId);
    props.getVillagerInfo(villagerId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!props.offersErrorMessage && props.offers.length > 0 ? (
        <>
          <PageHeader>
            <PageTitle>Предложения жителя {props.lastRequstedVillager.name}</PageTitle>
            <ReputationContainer>
              <p>
                {props.lastRequstedVillager.professionName} -{' '}
                {props.lastRequstedVillager.reputationLevelName}
              </p>
              <ReputationBar
                barWidth={
                  (props.lastRequstedVillager.currentReputation /
                    (props.lastRequstedVillager.currentReputation +
                      props.lastRequstedVillager.dealsToNextReputationLevel)) *
                  100
                }
                role="progressbar"
                aria-valuenow={props.lastRequstedVillager.currentReputation}
                aria-valuemax={
                  props.lastRequstedVillager.currentReputation +
                  props.lastRequstedVillager.dealsToNextReputationLevel
                }>
                <img src={emptyReputationBar} width="306" height="15" alt="" />
                <ReputationBarFullRow src={fullReputationBar} width="306" height="15" alt="" />
              </ReputationBar>
            </ReputationContainer>
          </PageHeader>
          <OffersList>
            {props.offers.map((offer) => (
              <Offer key={offer.offerId} {...offer} />
            ))}
          </OffersList>
        </>
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
