import Item from '../../Offers/Offer/Item/Item';
import { KitContainer, KitGrid } from './KitStyles';
import KitButton from './KitButton/KitButtonContainer';

const Kit = (props) => {
  return (
    <KitContainer>
      <h3>{props.name}</h3>
      <KitGrid>
        {props.items.map((item) => (
          <Item key={item.id} as="li" {...item} />
        ))}
      </KitGrid>
      <KitButton time={props.secondsBeforeObtainment} kitId={props.id} />
    </KitContainer>
  );
};

export default Kit;
