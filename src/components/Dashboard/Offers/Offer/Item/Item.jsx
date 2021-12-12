import { VisuallyHidden } from 'components/AppStyles';
import { StyledItem, ItemAmount, ItemAmountWithDiscount } from './ItemStyles';

const Item = (props) => {
  return (
    <StyledItem icon={props.iconAddress}>
      <VisuallyHidden>{props.name}</VisuallyHidden>
      <ItemAmount discount={props.amountWithDiscount > 0} notEnough={props.notEnough}>
        {props.amount}
      </ItemAmount>
      {props.amountWithDiscount > 0 && (
        <ItemAmountWithDiscount notEnough={props.notEnough}>{props.amountWithDiscount}</ItemAmountWithDiscount>
      )}
    </StyledItem>
  );
};

export default Item;
