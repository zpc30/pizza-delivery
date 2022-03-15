import React, { useState } from 'react';
import {
  MenuContainer,
  UpperMenuDiv,
  MenuHeading,
  SideMenuDiv,
  SideMenuCategories,
  SideMenuLinks,
  MenuItems,
  MenuPizza,
} from './style';
import MenuItemDisplay from '../../components/MenuItemDisplay';
import food from '../../data/food';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const categories = ['All', 'Vegeterian', 'Cheese', 'Fish', 'Chilly', 'Meat'];
  const [activeFilter, setActiveFilter] = useState(categories[0]);
  const foodList = food.filter((item) =>
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  const navigate = useNavigate();
  const routeChange = (itemId) => navigate(`/pizzaOrder/${itemId}`);

  return (
    <>
      <UpperMenuDiv>
        <MenuHeading>
          Whatever the question,
          <br /> <span>pizza</span> is the answer
        </MenuHeading>
        <MenuPizza src="./images/pizzaTile.png" />
      </UpperMenuDiv>
      <MenuContainer>
        <SideMenuDiv>
          <SideMenuCategories>
            {categories &&
              categories.map((filterName, idx) => (
                <li onClick={() => setActiveFilter(filterName)} key={idx}>
                  <SideMenuLinks isActive={activeFilter === filterName}>
                    {filterName}
                  </SideMenuLinks>
                </li>
              ))}
          </SideMenuCategories>
        </SideMenuDiv>
        <MenuItems>
          {foodList.map((foodItem) => (
            <MenuItemDisplay
              handleClick={() => routeChange(foodItem.id)}
              key={foodItem.id}
              imageUrl={process.env.PUBLIC_URL + foodItem.img}
              title={foodItem.title}
              desc={foodItem.desc}
              price={foodItem.price}
            />
          ))}
        </MenuItems>
      </MenuContainer>
    </>
  );
};

export default Menu;
