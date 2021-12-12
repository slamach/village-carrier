import { ItemsRow, OffersItem } from './OfferStyles';
import { Button, VisuallyHidden } from 'components/AppStyles';
import Item from './Item/Item';
import arrowIcon from 'assets/img/arrow.png';

const Offer = (props) => {
  const makeNewDeal = () => {
    props.makeNewDeal(props.offerId);
  };

  return (
    <OffersItem>
      <VisuallyHidden as="h2">
        {`Предложение обмена ${props.buyingItem.name.toLowerCase()} (${props.amountOfBuyingItems})
          на ${props.sellingItem.name.toLowerCase()} (${props.amountOfSellingItems})`}
      </VisuallyHidden>
      <ItemsRow>
        <Item
          notEnough={props.offerAvailability === 'NOT_ENOUGH_ITEMS'}
          {...props.buyingItem}
          amount={props.amountOfBuyingItems}
        />
        <img src={arrowIcon} width="23" height="15" alt="Обменять на" />
        <Item {...props.sellingItem} amount={props.amountOfSellingItems} />
      </ItemsRow>
      <Button disabled={props.offerAvailability !== 'AVAILABLE'} onClick={makeNewDeal}>
        Обменять
      </Button>
    </OffersItem>
  );
};

export default Offer;
