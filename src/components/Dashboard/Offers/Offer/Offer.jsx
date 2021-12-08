import { ItemsRow, OffersItem } from './OfferStyles';
import { Button } from 'components/AppStyles';
import Item from './Item/Item';
import arrowIcon from 'assets/img/arrow.png';

const Offer = (props) => {
  const makeNewDeal = () => {
    props.makeNewDeal(props.offerId);
  };

  return (
    <OffersItem>
      <ItemsRow>
        <Item
          notEnough={props.offerAvailability === 'NOT_ENOUGH_ITEMS'}
          {...props.buyingItem}
          amount={props.amountOfBuyingItems}
        />
        <img src={arrowIcon} width="23" height="15" alt="" />
        <Item {...props.sellingItem} amount={props.amountOfSellingItems} />
      </ItemsRow>
      <Button disabled={props.offerAvailability !== 'AVAILABLE'} onClick={makeNewDeal}>Обменять</Button>
    </OffersItem>
  );
};

export default Offer;
