import { VillagesItem, VillageLink } from './VillagerStyles';
import villagerArmorer from 'assets/img/villager-armorer.png';
import villagerButcher from 'assets/img/villager-butcher.png';
import villagerCleric from 'assets/img/villager-cleric.png';
import villagerFarmer from 'assets/img/villager-farmer.png';
import villagerLeatherworker from 'assets/img/villager-leatherworker.png';
import villagerToolsmith from 'assets/img/villager-toolsmith.png';
import villagerWeaponsmith from 'assets/img/villager-weaponsmith.png';
import villagerDefault from 'assets/img/villager-default.png';

const Village = (props) => {
  let skin;
  let width = 77;
  switch (props.professionName) {
    case 'Бронник':
      skin = villagerArmorer;
      break;
    case 'Мясник':
      skin = villagerButcher;
      break;
    case 'Священник':
      skin = villagerCleric;
      break;
    case 'Фермер':
      skin = villagerFarmer;
      width = 101;
      break;
    case 'Кожевник':
      skin = villagerLeatherworker;
      break;
    case 'Инструментальщик':
      skin = villagerToolsmith;
      break;
    case 'Оружейник':
      skin = villagerWeaponsmith;
      break;
    default:
      skin = villagerDefault;
  }

  const declOfNum = (n, textForms) => {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) {
      return textForms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return textForms[1];
    }
    if (n1 === 1) {
      return textForms[0];
    }
    return textForms[2];
  };

  return (
    <VillagesItem>
      <p>{props.reputationLevel}</p>
      <img
        src={skin}
        width={width}
        height="154"
        alt={`${props.professionName} - скин`}
      />
      <VillageLink to={`/villager/${props.villagerId}`}>
        <h2>{props.name}</h2>
      </VillageLink>
      <p>{props.professionName}</p>
      <p>{`${props.offersAmount} ${declOfNum(props.offersAmount, [
        'сделка',
        'сделки',
        'сделок'
      ])}`}</p>
    </VillagesItem>
  );
};

export default Village;
