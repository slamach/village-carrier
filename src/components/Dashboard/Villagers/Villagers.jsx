import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { VillagersList, RaidButtonContainer, RaidMessage } from './VillagersStyles';
import Villager from './Villager/Villager';
import { PageErrorMessage, PageHeader, PageTitle, ZoomText } from '../DashboardStyles';
import { Button } from '../../AppStyles';
import villageEmpty from 'assets/img/village-empty.png';

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
            {props.lastRequestedVillage.hasRaid &&
              (props.raidStatus === 0 || props.raidStatus === 2) && (
                <>
                  <RaidButtonContainer>
                    <Button onClick={() => props.fightRaid(props.lastRequestedVillage.raidId)}>
                      Защитить деревню
                    </Button>
                    {props.lastRequestedVillage.hasRaid && <ZoomText>Рейд</ZoomText>}
                  </RaidButtonContainer>
                  <RaidMessage>
                    {props.raidStatus === 0
                      ? 'Защищая деревню, вы можете получить скидку или потерять все свои вещи'
                      : 'К сожалению, вам не удалось защитить деревню'}
                  </RaidMessage>
                </>
              )}
            {props.raidStatus === 1 ? (
              <RaidMessage>Вы защитили деревню, скидка ваша</RaidMessage>
            ) : (
              props.raidStatus === 3 && (
                <RaidMessage>
                  Кажется, деревню защитил кто-то другой
                </RaidMessage>
              )
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
