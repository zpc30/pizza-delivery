import { MenuItem, MenuItemPhoto } from '../../pages/Menu/style';
import { React, useState } from 'react';

const MenuItemDisplay = ({ imageUrl, title, desc, price }) => {
  // const [menuItem, setMenuItem] = useState(food);
  // const { imageUrl, desc, title, price, id } = foodItem;
  return (
    <>
      <MenuItem>
        <MenuItemPhoto image={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>Price: {price}$</p>
      </MenuItem>
    </>
  );
};

export default MenuItemDisplay;
