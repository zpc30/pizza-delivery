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
  '@media (max-width: 768px)': {
    left: '0rem',
    top: '-5rem',
    fontSize: '42px',
  },
});

export const MenuGrid = styled.div({
  '@media (min-width: 350px)': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyContent: 'center',
    margin: '0',
    padding: '0',
  },
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'auto auto',
  },
  '@media (min-width: 992px)': {
    gridTemplateColumns: 'auto auto auto',
    width: '20vw',
    marginLeft: '0rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (min-width: 1500px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '50vw',
    gap: '0px',
  },
});

export const MenuHot = styled.div({
  gridColumn: 'span 2',
  gridRow: 'span 2',
  margin: '0',
  position: 'relative',
  '@media (max-width: 768px)': {
    gridColumn: 'span 1',
    gridRow: 'span 1',
  },
  '&:hover': {
    fontSize: '22px',
  },
});

export const MenuHotImg = styled.img({
  width: '100%',
  '@media (min-width: 350px)': {
    width: '350px',
  },
  '@media (min-width: 768px)': {
    width: '700px',
  },
});

export const MenuImgContainer = styled.div({
  position: 'relative',
  '&:hover': {
    fontSize: '22px',
  },
  '&>img': {
    width: '350px',
  },
});
