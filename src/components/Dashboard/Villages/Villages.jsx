import { VillagesList, VillagesItem, VillageLink } from './VillagesStyles';

const Villages = (props) => {
  return (
    <VillagesList>
      <VillagesItem>
        <VillageLink to="/village/2">
          <h2>Деревня</h2>
        </VillageLink>
        <p>X: 2 Z: 3</p>
      </VillagesItem>
      <VillagesItem>
        <VillageLink to="/village/2">
          <h2>Деревня</h2>
        </VillageLink>
        <p>X: 2 Z: 3</p>
      </VillagesItem>
      <VillagesItem>
        <VillageLink to="/village/2">
          <h2>Деревня</h2>
        </VillageLink>
        <p>X: 2 Z: 3</p>
      </VillagesItem>
    </VillagesList>
  );
};

export default Villages;
