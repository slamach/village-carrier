import { useEffect } from 'react';
import { useParams } from 'react-router';
import { VillagersList } from './VillagersStyles';
import Villager from './Villager/Villager';

const Villagers = (props) => {
  let { villageId } = useParams();
  useEffect(() => {
    props.getVillagers(villageId);
    // eslint-disable-next-line
  }, []);

  return (
    <VillagersList>
      {props.villagers.map((villager) => (
        <Villager key={villager.id} {...villager} />
      ))}
    </VillagersList>
  );
};

export default Villagers;
