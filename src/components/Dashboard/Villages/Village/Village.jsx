import { VillagesItem, VillageLink } from './VillageStyles';
import villagePlains from 'assets/img/village-plains.png';
import villageDesert from 'assets/img/village-desert.png';
import villageSnowyTundra from 'assets/img/village-snowy-tundra.png';
import villageSavanna from 'assets/img/village-savanna.png';
import villageTaiga from 'assets/img/village-taiga.png';
import villageEmpty from 'assets/img/village-empty.png';

const Village = (props) => {
  let skin;
  let width;
  switch (props.biome.name) {
    case 'Равнины':
      skin = villagePlains;
      width = 179;
      break;
    case 'Пустыня':
      skin = villageDesert;
      width = 152;
      break;
    case 'Заснеженная тундра':
      skin = villageSnowyTundra;
      width = 183;
      break;
    case 'Саванна':
      skin = villageSavanna;
      width = 181;
      break;
    case 'Тайга':
      skin = villageTaiga;
      width = 201;
      break;
    default:
      skin = villageEmpty;
      width = 182;
  }

  return (
    <VillagesItem>
      <img src={skin} width={width} height="154" alt={`${props.biome.name} - дом`} />
      <VillageLink to={`/village/${props.id}`}>
        <h2>{props.name}</h2>
      </VillageLink>
      <p>{props.biome.name}</p>
      <p>
        X: {props.xcoordinate} Z: {props.zcoordinate}
      </p>
    </VillagesItem>
  );
};

export default Village;
