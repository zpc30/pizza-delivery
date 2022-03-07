import { LogoImg, MainNav, NavLinks, NavLinksA } from './style';

const Navigation = () => {
  return (
    <MainNav>
      <LogoImg src="./images/logoPizza.png" />
      <NavLinks>
        <li>
          <NavLinksA href="#">Home</NavLinksA>
        </li>
        <li>
          <NavLinksA href="#">About us</NavLinksA>
        </li>
        <li>
          <NavLinksA href="#">Contact us</NavLinksA>
        </li>
        <li>
          <NavLinksA href="#">Menu</NavLinksA>
        </li>
      </NavLinks>
    </MainNav>
  );
};

export default Navigation;
