import Item from 'components/Dashboard/Offers/Offer/Item/Item';
import {
  InventoryContainer,
  InventoryGrid,
  InventoryItem,
  InventoryLabel
} from './InventoryStyles';

const Inventory = (props) => {
  const MIN_INVENTORY_CAPACITY = 54;
  let additionalItemsNum =
    props.items.length < MIN_INVENTORY_CAPACITY
      ? MIN_INVENTORY_CAPACITY - props.items.length
      : 9 - (props.items.length % 9);

  return (
    <InventoryContainer>
      <InventoryLabel>Инвентарь</InventoryLabel>
      <InventoryGrid>
        {props.items.map((item) => (
          <InventoryItem key={item.id}>
            <Item {...item} />
          </InventoryItem>
        ))}
        {[...Array(additionalItemsNum)].map((e, i) => (
          <InventoryItem key={i} />
        ))}
      </InventoryGrid>
    </InventoryContainer>
  );
};

export default Inventory;
