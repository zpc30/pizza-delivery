import styled from 'styled-components';

export const MenuContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
  margin: 0,
  padding: 0,
});

export const UpperMenuDiv = styled.div({
  position: 'relative',
  height: '40vh',
  zIndex: '-1',
});

export const MenuHeading = styled.h1({
  paddingLeft: '5rem',
  paddingTop: '3rem',
  color: 'red',
  fontSize: '4.2rem',
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
  width: '30vw',
  height: '100vh',
});

export const SideMenuCategories = styled.ul({
  position: 'absolute',
  left: 30,
  listStyle: 'none',
  display: 'flex',
  gap: '2.5rem',
  flexDirection: 'column',
  textAlign: 'center',
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
  // position: 'relative',
  // left: '50%',
  // transform: 'translateX(-45%)',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: '50px',
  columnGap: '50px',
  borderLeft: '2px solid red',
  paddingLeft: '5rem',
});

export const MenuItem = styled.div({
  position: 'relative',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  h3: {
    fontSize: '1.7rem',
    fontWeight: '400',
  },
  p: {
    fontSize: '1.3rem',
  },
});

export const MenuItemPhoto = styled.div({}, ({ image }) => ({
  width: '300px',
  height: '300px',
  background: `url(${image})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  cursor: 'pointer',
}));
