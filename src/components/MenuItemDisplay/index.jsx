import { MenuItem, MenuItemPhoto } from '../../pages/Menu/style';
import { React } from 'react';

const MenuItemDisplay = ({ imageUrl, title, desc, price }) => {
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
