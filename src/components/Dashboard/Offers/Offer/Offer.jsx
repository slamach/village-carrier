import { ItemsRow, OffersItem } from './OfferStyles';
import { Button } from 'components/AppStyles';
import Item from './Item/Item';
import arrowIcon from 'assets/img/arrow.png';

const Offer = (props) => {
  return (
    <OffersItem>
      <ItemsRow>
        <Item
          notEnough={!props.canBeTraded}
          {...props.buyingItem}
          amount={props.amountOfBuyingItems}
        />
        <img src={arrowIcon} alt="" />
        <Item {...props.sellingItem} amount={props.amountOfSellingItems} />
      </ItemsRow>
      <Button disabled={!props.canBeTraded}>Обменять</Button>
    </OffersItem>
  );
};

export default Offer;
