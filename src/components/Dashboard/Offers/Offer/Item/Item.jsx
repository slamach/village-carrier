import { VisuallyHidden } from 'components/AppStyles';
import { StyledItem, ItemAmount } from './ItemStyles';

const Item = (props) => {
  return (
    <StyledItem icon={props.iconAddress}>
      <VisuallyHidden>{props.name}</VisuallyHidden>
      <ItemAmount notEnough={props.notEnough}>{props.amount}</ItemAmount>
    </StyledItem>
  );
};

export default Item;
