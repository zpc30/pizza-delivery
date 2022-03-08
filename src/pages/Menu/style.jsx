import styled from 'styled-components';

export const MenuContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  height: '100%',
  margin: 0,
  padding: 0,
});

export const UpperMenuDiv = styled.div({
  position: 'relative',
  height: '30vh',
});

export const MenuHeading = styled.h1({
  position: 'absolute',
  left: 10,
  top: 0,
  color: 'red',
  fontSize: '5rem',
  lineHeight: '4rem',
  span: {
    color: 'yellow',
  },
});

export const SideMenuDiv = styled.div({
  marginTop: '2rem',
  width: '20vw',
  height: '100%',
  borderRight: '2px solid red',
});

export const SideMenuCategories = styled.ul({
  listStyle: 'none',
  display: 'flex',
  gap: '2.5rem',
  flexDirection: 'column',
  marginLeft: '1rem',
});

export const SideMenuLinks = styled.button(
  {
    display: 'block',
    fontFamily: 'inherit',
    color: 'black',
    fontSize: '1.5rem',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  ({ href, isActive }) => ({
    href,
    fontWeight: isActive ? '400' : '100',
  })
);

export const MenuItems = styled.div({
  position: 'relative',
  height: '100%',
  width: '60%',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  rowGap: '5%',
});

export const MenuItem = styled.div({
  width: '100%',
  height: '100%',
});

export const MenuItemPhoto = styled.div({}, ({ image }) => ({
  width: '250px',
  height: '250px',
  background: `url(${image})`,
  backgroundPosition: 'center center',
  backgroundSize: 'contain',
}));
