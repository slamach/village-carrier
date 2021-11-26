import { VillagesItem, VillageLink } from './VillageStyles';

const Village = (props) => {
  return (
    <VillagesItem>
      <VillageLink to={`/village/${props.id}`}>
        <h2>{props.name}</h2>
      </VillageLink>
      <p>
        X: {props.xcoordinate} Z: {props.zcoordinate}
      </p>
    </VillagesItem>
  );
};

export default Village;
