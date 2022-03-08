import styled from 'styled-components';

export const MenuContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  margin: 0,
  padding: 0,
});

export const UpperMenuDiv = styled.div({
  position: 'relative',
  height: '40vh',
  zIndex: '-1',
});

export const MenuHeading = styled.h1({
  padding: '3rem',
  color: 'red',
  fontSize: '5rem',
  lineHeight: '4rem',
  span: {
    color: '#F9A72B',
  },
});

export const MenuPizza = styled.img({
  position: 'absolute',
  opacity: '0.3',
  width: '550px',
  top: '0',
  zIndex: '-1',
});

export const SideMenuDiv = styled.div({
  marginTop: '2rem',
  width: '10vw',
  height: '100vh',
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
  width: '60%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: '50px',
  heigh: '100%',
  borderLeft: '2px solid red',
  paddingLeft: '10rem',
});

export const MenuItem = styled.div({
  width: '100%',
  height: '100%',
});

export const MenuItemPhoto = styled.div({}, ({ image }) => ({
  width: '200px',
  height: '200px',
  background: `url(${image})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
}));
