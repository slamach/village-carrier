import { useEffect } from 'react';
import Inventory from './Inventory/Inventory';
import Kit from './Kit/Kit';
import {
  ProfContainer,
  InventoryContainer,
  KitsContainer,
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
          <ProfileSectionTitle>
            <VisuallyHidden as="span">Инвентарь</VisuallyHidden>
            {props.user.username}
          </ProfileSectionTitle>
          <Inventory items={props.inventory} />
          <Button onClick={props.makeNewWithdrawal}>Вывести вещи</Button>
        </InventoryContainer>
        <section>
          <ProfileSectionTitle>Наборы</ProfileSectionTitle>
          <KitsContainer>
            {props.kits.map((kit) => (
              <Kit key={kit.id} {...kit} />
            ))}
          </KitsContainer>
        </section>
      </ProfContainer>
    </>
  );
};

export default Profile;
