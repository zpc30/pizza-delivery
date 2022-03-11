import { Burger, LogoImg, MainNav, NavLinks, NavLinksA } from './style';
const Navigation = () => {
  return (
    <MainNav>
      <LogoImg src="./images/logoPizza.png" />
      <Burger>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <NavLinks>
        <li>
          <NavLinksA to="/">Home</NavLinksA>
        </li>
        <li>
          <NavLinksA to="pizzaOrder">About us</NavLinksA>
        </li>
        <li>
          <NavLinksA to="#">Contact us</NavLinksA>
        </li>
        <li>
          <NavLinksA to="/menu">Menu</NavLinksA>
        </li>
      </NavLinks>
    </MainNav>
  );
};

export default Navigation;
