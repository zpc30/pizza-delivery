import {
  MenuContainer,
  MenuGrid,
  MenuH1,
  MenuHot,
  MenuHotImg,
  MenuImgContainer,
  MenuH3,
} from './style';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuH1>Menu</MenuH1>
      <MenuGrid>
        <MenuHot>
          <MenuHotImg src="./images/hotSpicy.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuHot>
        <MenuImgContainer>
          <img src="./images/tunaSalad.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuImgContainer>
        <MenuImgContainer>
          <img src="./images/vegan.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuImgContainer>
        <MenuImgContainer>
          <img src="./images/homeSpecial.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuImgContainer>
        <MenuImgContainer>
          <img src="./images/fullCrust.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuImgContainer>
        <MenuImgContainer>
          <img src="./images/cesarPizza.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuImgContainer>
        <MenuImgContainer>
          <img src="./images/tomato.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuImgContainer>
        <MenuImgContainer>
          <img src="./images/spiceySlice.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuImgContainer>
        <MenuImgContainer>
          <img src="./images/saltNPepa.png" />
          <MenuH3>Hot n spicy</MenuH3>
        </MenuImgContainer>
      </MenuGrid>
    </MenuContainer>
  );
};

export default Menu;
