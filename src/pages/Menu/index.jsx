import React, { useState } from 'react';
import {
  MenuContainer,
  UpperMenuDiv,
  MenuHeading,
  SideMenuDiv,
  SideMenuCategories,
  SideMenuLinks,
  MenuItems,
  MenuItem,
  MenuItemsRow,
  MenuItemPhoto,
} from './style';
import MenuItemDisplay from '../../components/MenuItemDisplay';
import food from '../../data/food';

const Menu = () => {
  const filters = ['All', 'Vegan', 'Cheese', 'Tuna', 'Chilly'];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <>
      <UpperMenuDiv>
        <MenuHeading>
          Whatever the question,
          <br /> <span>pizza</span> is the answer
        </MenuHeading>
      </UpperMenuDiv>
      <MenuContainer>
        <SideMenuDiv>
          <SideMenuCategories>
            {filters &&
              filters.map((filterName, idx) => (
                <li onClick={() => setActiveFilter(filterName)} key={idx}>
                  <SideMenuLinks isActive={activeFilter === filterName}>
                    {filterName}
                  </SideMenuLinks>
                </li>
              ))}
          </SideMenuCategories>
        </SideMenuDiv>
        <MenuItems>
          {food.map((foodItem) => (
            <MenuItemDisplay
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
