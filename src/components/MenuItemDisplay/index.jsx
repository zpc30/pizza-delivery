import { MenuItem, MenuItemPhoto } from '../../pages/Menu/style';
import { React } from 'react';

const MenuItemDisplay = ({ imageUrl, title, price, handleClick }) => {
  return (
    <MenuItem onClick={handleClick}>
      <MenuItemPhoto image={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Price: {price}$</p>
    </MenuItem>
  );
};

export default MenuItemDisplay;
