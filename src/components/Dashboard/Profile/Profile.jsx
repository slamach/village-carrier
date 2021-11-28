import { useEffect } from 'react';
import Inventory from "./Inventory/Inventory";
import { ProfContainer, Username } from "./ProfileStyles";
import { Button } from '../../AppStyles';

const Profile = (props) => {
  useEffect(() => {
    props.getInventory();
    // eslint-disable-next-line
  }, []);

  return (
    <ProfContainer>
      <Username>{props.user.username}</Username>
      <Inventory items={props.inventory} />
      <Button onClick={props.makeNewWithdrawal}>Вывести вещи</Button>
    </ProfContainer>
  );
}

export default Profile;
