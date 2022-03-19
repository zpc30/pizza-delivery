import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainNav = styled.div({
  height: '60px',
  display: 'flex',
  width: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '2px 4px 12px rgb(0,0,0,0.2)',
  '@media (max-width: 768px)': {
    height: '120px',
  },
});

export const Burger = styled.div({
  '@media (max-width: 767px)': {
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '45px',
    right: '45px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    '&>div': {
      width: '40px',
      height: '5px',
      background: '#ED1C24',
      borderRadius: '3rem',
    },
  },
});

export const NavLinks = styled.ul({
  position: 'absolute',
  right: '-100vw',
  listStyle: 'none',

  '@media (min-width: 768px)': {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    position: 'absolute',
    right: '5vw',
  },
});

export const NavLinksA = styled(Link)(
  {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'black',
    fontSize: '16px',
    fontWeight: '600',
    '@media (max-width: 768px)': {
      color: 'white',
    },
  },
  ({ href }) => ({
    href,
  })
);

export const LogoImg = styled.img(
  {
    height: '100%',
    padding: '0.2rem',
    position: 'absolute',
    left: '7.5rem',
    '@media (max-width: 768px)': {
      left: '25px',
      width: '100px',
      height: 'auto',
    },
  },
  ({ src }) => ({
    src,
  })
);
