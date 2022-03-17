import styled from 'styled-components';

export const MenuContainer = styled.div({
  margin: 0,
  padding: 0,
});

export const UpperMenuDiv = styled.div({
  position: 'relative',
  width: '100vw',
  height: '40vh',
  zIndex: '-1',
});

export const MenuHeading = styled.h1({
  paddingLeft: '5rem',
  paddingTop: '3rem',
  color: 'red',
  fontSize: '3.1rem',
  lineHeight: '4rem',
  span: {
    color: '#F9A72B',
  },
  padding: '2rem 0 0 2rem',
  '@media (min-width: 768px)': {
    fontSize: '4.6rem',
    lineHeight: '5.8rem',
  },
});

export const MenuPizza = styled.img({
  position: 'absolute',
  opacity: '0.2',
  width: '550px',
  top: '0',
  zIndex: '-1',
  width: '95vw',
  top: '1rem',
  '@media (min-width: 768px)': {
    width: '60vw',
    margin: '3rem 20vw',
  },
  '@media (min-width: 1336px)': {
    width: '500px',
    left: '50px',
    margin: '0',
  },
});

export const SideMenuDiv = styled.div({
  width: '10wv',
  padding: '0 2rem',
  height: '20vh',
});

export const SideMenuCategories = styled.ul({
  position: 'absolute',
  left: '30',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '2.5rem',
  textAlign: 'center',
  '@media (min-width: 1336px)': {
    flexDirection: 'column',
  },
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
    fontWeight: isActive ? '700' : '400',
  })
);

export const MenuItems = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  rowGap: '50px',
  height: '100%',
  gap: '1rem',
  '@media (min-width: 768px)': {
    gap: '2rem',
  },
  '@media (min-width: 1336px)': {
    display: 'grid',
    position: 'relative',
    left: '3rem',
    bottom: '15rem',
    gridTemplateColumns: 'auto auto auto',
    marginLeft: '10rem',
    borderLeft: 'solid 2px red',
  },
});

export const MenuItem = styled.div({
  width: '280px',
  height: '100%',
  h3: {
    fontSize: '1.4rem',
    fontWeight: '400',
  },
  p: {
    fontSize: '1.3rem',
  },
});

export const MenuItemPhoto = styled.div({}, ({ image }) => ({
  width: '280px',
  height: '280px',
  background: `url(${image})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));
