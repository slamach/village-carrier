import { useState } from "react";
import { Link } from "react-router-dom";
import shortLogo from "assets/img/logo-short.svg";
import {
  HeaderLink,
  MenuItem,
  MenuList,
  MobileMenuButton,
  NavBar,
  NavLogo,
  StatItem,
  StatList,
  StyledHeader,
} from "./HeaderStyles";
import emerald from "assets/img/emerald.png";

const Header = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <NavBar>
        <NavLogo to="/">
          <img src={shortLogo} width="141" height="48" alt="Village Carrier" />
        </NavLogo>
        <StatList>
          <StatItem icon={emerald}>{props.userEmeralds}</StatItem>
        </StatList>
        <MenuList mobileActive={isMobileMenuOpen}>
          <MenuItem>
            <HeaderLink
              as={Link}
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </HeaderLink>
          </MenuItem>
          <MenuItem>
            <HeaderLink
              as={Link}
              to="/profile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Профиль
            </HeaderLink>
          </MenuItem>
          <MenuItem>
            <HeaderLink
              href=""
              onClick={() => {
                setIsMobileMenuOpen(false);
                props.logout();
              }}
            >
              Выйти
            </HeaderLink>
          </MenuItem>
        </MenuList>
        <MobileMenuButton
          active={isMobileMenuOpen}
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <span></span>
        </MobileMenuButton>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
