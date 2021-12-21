import { Link } from 'react-router-dom';
import shortLogo from 'assets/img/logo-short.svg';
import {
  HeaderLink,
  MenuItem,
  MenuList,
  NavBar,
  NavLogo,
  StatItem,
  StatList,
  StyledHeader
} from './HeaderStyles';
import emerald from 'assets/img/emerald.png';

const Header = (props) => {
  return (
    <StyledHeader>
      <NavBar>
        <NavLogo to="/">
          <img src={shortLogo} width="141" height="48" alt="Village Carrier" />
        </NavLogo>
        <StatList>
          <StatItem icon={emerald}>{props.userEmeralds}</StatItem>
        </StatList>
        <MenuList>
          <MenuItem>
            <HeaderLink as={Link} to="/">
              Главная
            </HeaderLink>
          </MenuItem>
          <MenuItem>
            <HeaderLink as={Link} to="/profile">
              Профиль
            </HeaderLink>
          </MenuItem>
          <MenuItem>
            <HeaderLink href="" onClick={props.logout}>Выйти</HeaderLink>
          </MenuItem>
        </MenuList>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
