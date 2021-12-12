import styled from 'styled-components';
import itemsSprite from 'assets/img/items2.png';

export const ItemAmount = styled.p`
  position: absolute;
  ${({ discount }) => (discount ? 'top: 0;' : 'bottom: 0;')};
  ${({ discount }) => (discount ? 'left: 0;' : 'right: 0;')};
  ${({ notEnough, discount, theme }) => notEnough && !discount && `color: ${theme.colors.error};`};
  ${({ discount }) => discount && 'text-decoration: line-through;'};
  user-select: none;
`;

export const ItemAmountWithDiscount = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  ${({ notEnough, theme }) => notEnough && `color: ${theme.colors.error};`};
  user-select: none;
`;

export const StyledItem = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  background-image: url('${itemsSprite}');
  background-repeat: no-repeat;
  image-rendering: pixelated;

  ${({ icon }) => {
    switch (icon) {
      case 'emerald':
        return 'background-position: -1440px -624px;';
      case 'coal':
        return 'background-position: -960px -384px;';
      case 'iron-helmet':
        return 'background-position: -480px -864px;';
      case 'iron-chestplate':
        return 'background-position: -384px -864px;';
      case 'iron-leggings':
        return 'background-position: -672px -864px;';
      case 'iron-boots':
        return 'background-position: -336px -864px;';
      case 'iron-ingot':
        return 'background-position: -624px -864px;';
      case 'bell':
        return 'background-position: -1392px -96px;';
      case 'chainmail-leggings':
        return 'background-position: -96px -384px;';
      case 'chainmail-boots':
        return 'background-position: -1488px -336px;';
      case 'lava-bucket':
        return 'background-position: -864px -912px;';
      case 'diamond':
        return 'background-position: -1392px -576px;';
      case 'chainmail-helmet':
        return 'background-position: -48px -384px;';
      case 'chainmail-chestplate':
        return 'background-position: -0px -384px;';
      case 'shield':
        return 'background-position: -384px -1488px;';
      case 'diamond-leggings':
        return 'background-position: -192px -624px;';
      case 'diamond-boots':
        return 'background-position: -1488px -576px;';
      case 'diamond-helmet':
        return 'background-position: -48px -624px;';
      case 'diamond-chestplate':
        return 'background-position: -0px -624px;';
      case 'chicken':
        return 'background-position: -576px -1392px;';
      case 'porkchop':
        return 'background-position: -864px -1392px;';
      case 'rabbit':
        return 'background-position: -912px -1392px;';
      case 'cooked-rabbit':
        return 'background-position: -528px -432px;';
      case 'cooked-porkchop':
        return 'background-position: -480px -432px;';
      case 'cooked-chicken':
        return 'background-position: -336px -432px;';
      case 'mutton':
        return 'background-position: -816px -1392px;';
      case 'beef':
        return 'background-position: -528px -1398px;';
      case 'dried-kelp-block':
        return 'background-position: -1104px -624px;';
      case 'sweet-berries':
        return 'background-position: -864px -1632px;';
      case 'rotten-flesh':
        return 'background-position: -1152px -1440px;';
      case 'redstone':
        return 'background-position: -624px -960px;';
      case 'gold-ingot':
        return 'background-position: -1392px -720px;';
      case 'lapis-lazuli':
        return 'background-position: -672px -912px;';
      case 'rabbit-foot':
        return 'background-position: -384px -1392px;';
      case 'glowstone':
        return 'background-position: -1248px -720px;';
      case 'scute':
        return 'background-position: -96px -1488px;';
      case 'glass-bottle':
        return 'background-position: -864px -720px;';
      case 'ender-pearl':
        return 'background-position: -720px -672px;';
      case 'nether-wart':
        return 'background-position: -720px -1104px;';
      case 'experience-bottle':
        return 'background-position: -192px -240px;';
      case 'wheat':
        return 'background-position: -48px -1776px;';
      case 'potato':
        return 'background-position: -1392px -1248px;';
      case 'carrot':
        return 'background-position: -864px -336px;';
      case 'beetroot':
        return 'background-position: -1200px -96px;';
      case 'bread':
        return 'background-position: -528px -240px;';
      case 'pumpkin':
        return 'background-position: -672px -1344px;';
      case 'pumpkin-pie':
        return 'background-position: -720px -1344px;';
      case 'apple':
        return 'background-position: -1440px 0;';
      case 'cookie':
        return 'background-position: -624px -432px;';
      case 'melon':
        return 'background-position: -1152px -1008px;';
      case 'suspicious-stew':
        return 'background-position: -816px -1632px;';
      case 'golden-carrot':
        return 'background-position: -144px -768px;';
      case 'glistering-melon-slice':
        return 'background-position: -960px -720px;';
      case 'leather':
        return 'background-position: -1008px -912px;';
      case 'leather-leggings':
        return 'background-position: -1200px -912px;';
      case 'leather-chestplate':
        return 'background-position: -1248px -912px;';
      case 'flint':
        return 'background-position: -288px -720px;';
      case 'leather-helmet':
        return 'background-position: -1104px -912px;';
      case 'leather-boots':
        return 'background-position: -1056px -912px;';
      case 'rabbit-hide':
        return 'background-position: -240px -1392px;';
      case 'bedrock':
        return 'background-position: -1008px 96px;';
      case 'leather-horse-armor':
        return 'background-position: -1152px -912px;';
      case 'saddle':
        return 'background-position: -1200px -1440px;';
      case 'stone-axe':
        return 'background-position: -528px -1584px;';
      case 'stone-shovel':
        return 'background-position: -960px -1584px;';
      case 'stone-pickaxe':
        return 'background-position: -864px -1584px;';
      case 'stone-hoe':
        return 'background-position: -816px -1584px;';
      case 'iron-axe':
        return 'background-position: -240px -864px;';
      case 'iron-shovel':
        return 'background-position: -864px -864px;';
      case 'iron-pickaxe':
        return 'background-position: -816px -864px;';
      case 'diamond-hoe':
        return 'background-position: -96px -624px;';
      case 'diamond-axe':
        return 'background-position: -1440px -576px;';
      case 'diamond-shovel':
        return 'background-position: -336px -624px;';
      case 'diamond-pickaxe':
        return 'background-position: -288px -624px;';
      case 'iron-sword':
        return 'background-position: -912px -864px;';
      case 'diamond-sword':
        return 'background-position: -384px -624px;';
      default:
        return 'background-position: -816px 0;';
    }
  }}
`;
