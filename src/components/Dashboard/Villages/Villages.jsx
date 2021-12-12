import { useEffect } from 'react';
import { VillagesList } from './VillagesStyles';
import Village from './Village/Village';
import { PageHeader, PageTitle } from '../DashboardStyles';

const Villages = (props) => {
  useEffect(() => {
    props.getVillages();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PageHeader>
        <PageTitle>Деревни</PageTitle>
      </PageHeader>
      <VillagesList>
        {props.villages.map((village) => (
          <Village key={village.id} {...village} />
        ))}
      </VillagesList>
    </>
  );
};

export default Villages;
