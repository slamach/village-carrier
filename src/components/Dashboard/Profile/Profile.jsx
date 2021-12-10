import { useEffect } from 'react';
import Inventory from './Inventory/Inventory';
import {
  ProfContainer,
  InventoryContainer,
  KitsContainer,
  KitItem,
  ProfileSectionTitle
} from './ProfileStyles';
import { Button, VisuallyHidden } from '../../AppStyles';

const Profile = (props) => {
  useEffect(() => {
    props.getInventory();
    props.getKits();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <VisuallyHidden as="h1">Профиль</VisuallyHidden>
      <ProfContainer>
        <InventoryContainer>
          <ProfileSectionTitle>{`Инвентарь ${props.user.username}`}</ProfileSectionTitle>
          <Inventory items={props.inventory} />
          <Button onClick={props.makeNewWithdrawal}>Вывести вещи</Button>
        </InventoryContainer>
        <section>
          <ProfileSectionTitle as="h2">Наборы</ProfileSectionTitle>
          <KitsContainer>
            {props.kits.map((kit) => (
              <KitItem key={kit.id} {...kit} />
            ))}
          </KitsContainer>
        </section>
      </ProfContainer>
    </>
  );
};

export default Profile;
