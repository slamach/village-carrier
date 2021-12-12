import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { VillagersList, RaidButtonContainer } from './VillagersStyles';
import Villager from './Villager/Villager';
import { PageErrorMessage, PageHeader, PageTitle } from '../DashboardStyles';
import { Button } from '../../AppStyles';
import villageEmpty from 'assets/img/village-empty.png';
import { ZoomText } from '../DashboardStyles';

const Villagers = (props) => {
  let { villageId } = useParams();
  useEffect(() => {
    props.getVillagers(villageId);
    props.getVillageInfo(villageId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!props.villagersErrorMessage && props.villagers.length > 0 ? (
        <>
          <PageHeader>
            <PageTitle>Жители деревни {props.lastRequestedVillage.name}</PageTitle>
            {props.lastRequestedVillage.hasRaid && (
              <RaidButtonContainer>
                <Button>Попытаться защитить</Button>
                {props.lastRequestedVillage.hasRaid && <ZoomText>Рейд</ZoomText>}
              </RaidButtonContainer>
            )}
          </PageHeader>
          <VillagersList>
            {props.villagers.map((villager) => (
              <Villager key={villager.villagerId} {...villager} />
            ))}
          </VillagersList>
        </>
      ) : (
        <PageErrorMessage>
          <img src={villageEmpty} width="182" height="154" alt="Пустая страница жителей деревни" />
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
