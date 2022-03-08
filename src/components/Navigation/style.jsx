import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainNav = styled.div({
  height: '100px',
  display: 'flex',
  width: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '2px 4px 12px rgb(0,0,0,0.2)',
});

export const NavLinks = styled.ul(
  {
    listStyle: 'none',
    display: 'flex',
    gap: '2.5rem',
    position: 'absolute',
    right: '7.5rem',
  },
  ({ theme }) => ({})
);

export const NavLinksA = styled(Link)(
  {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'black',
    fontSize: '16px',
    fontWeight: '600',
  },
  ({ href }) => ({
    href,
  })
);

export const LogoImg = styled.img(
  {
    width: '82px',
    position: 'absolute',
    left: '7.5rem',
  },
  ({ src }) => ({
    src,
  })
);
