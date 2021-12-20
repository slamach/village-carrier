import Item from '../../Offers/Offer/Item/Item';
import { KitsItem, KitGrid } from './KitStyles';
import KitButton from './KitButton/KitButtonContainer';

const Kit = (props) => {
  return (
    <KitsItem>
      <h3>{props.name}</h3>
      <KitGrid>
        {props.items.map((item) => (
          <li>
            <Item key={item.id} {...item} />
          </li>
        ))}
      </KitGrid>
      <KitButton time={props.secondsBeforeObtainment} kitId={props.id} />
    </KitsItem>
  );
};

export default Kit;
