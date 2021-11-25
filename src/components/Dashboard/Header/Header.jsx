import { Link } from 'react-router-dom';
import { Button } from '../../AppStyles';
import shortLogo from 'assets/img/logo-short.svg';
import { MenuItem, MenuList, NavBar, NavLogo, StatItem, StatList, StyledHeader } from './HeaderStyles';
import emerald from 'assets/img/emerald.png';

const Header = (props) => {
  return (
    <StyledHeader>
      <NavBar>
        <NavLogo to="/">
          <img src={shortLogo} alt="Village Carrier" />
        </NavLogo>
        <StatList>
          <StatItem icon={emerald}>1024</StatItem>
        </StatList>
        <MenuList>
          <MenuItem>
            <Button as={Link} to="/profile">
              Профиль
            </Button>
          </MenuItem>
          <MenuItem>
            <Button as="button" onClick={props.logout}>
              Выйти
            </Button>
          </MenuItem>
        </MenuList>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
