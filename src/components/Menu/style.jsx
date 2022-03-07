import styled from 'styled-components';

export const MenuContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  margin: '10rem 7.5rem',
});

export const MenuH3 = styled.h3({
  position: 'absolute',
  bottom: '1rem',
  left: '1rem',
  color: 'white',
});

export const MenuH1 = styled.h1({
  position: 'absolute',
  top: '-10rem',
  left: '9.5rem',
  fontSize: '72px',
  color: '#ED1C24',
});

export const MenuGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  width: '50vw',
  marginLeft: '-15rem',
});

export const MenuHot = styled.div`
  grid-column: span 2;
  grid-row: span 2;
  margin: 0;
  position: relative;
  &:hover {
    font-size: 22px;
  }
`;

export const MenuImgContainer = styled.div`
  position: relative;
  &:hover {
    font-size: 22px;
  }
`;
