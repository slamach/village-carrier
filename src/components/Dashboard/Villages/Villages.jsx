import { useEffect } from 'react';
import { VillagesList } from './VillagesStyles';
import Village from './Village/Village';
import { VisuallyHidden } from 'components/AppStyles';

const Villages = (props) => {
  useEffect(() => {
    props.getVillages();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <VisuallyHidden as="h1">Деревни</VisuallyHidden>
      <VillagesList>
        {props.villages.map((village) => (
          <Village key={village.id} {...village} />
        ))}
      </VillagesList>
    </>
  );
};

export default Villages;
