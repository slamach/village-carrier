import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { VillagersList } from './VillagersStyles';
import Villager from './Villager/Villager';
import { PageErrorMessage } from '../DashboardStyles';
import emptyVillage from 'assets/img/empty-village.png';
import { Button } from '../../AppStyles';

const Villagers = (props) => {
  let { villageId } = useParams();
  useEffect(() => {
    props.getVillagers(villageId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!props.villagersErrorMessage && props.villagers.length > 0 ? (
        <VillagersList>
          {props.villagers.map((villager) => (
            <Villager key={villager.villagerId} {...villager} />
          ))}
        </VillagersList>
      ) : (
        <PageErrorMessage>
          <img src={emptyVillage} width="182" height="154" alt="Пустая страница жителей деревни" />
          <p>
            {props.villagersErrorMessage
              ? props.villagersErrorMessage
              : 'Упс! Кажется, в деревне совсем нет жителей.'}
          </p>
          <Button as={Link} to="/">
            К деревням
          </Button>
        </PageErrorMessage>
      )}
    </>
  );
};

export default Villagers;
