import { useEffect } from 'react';
import { VillagesList } from './VillagesStyles';
import Village from './Village/Village';

const Villages = (props) => {
  useEffect(() => {
    props.getVillages();
    // eslint-disable-next-line
  }, []);

  return (
    <VillagesList>
      {props.villages.map((village) => (
        <Village key={village.id} {...village} />
      ))}
    </VillagesList>
  );
};

export default Villages;
