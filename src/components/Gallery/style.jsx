import styled from 'styled-components';

export const GalleryContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 'fit-contents',
  margin: '15rem 7.5rem 0 0',
  '@media (max-width: 768px)': {
    margin: '10rem 2rem',
  },
});

export const GalleryH1 = styled.h1({
  position: 'absolute',
  top: '-7rem',
  left: '7.5rem',
  fontSize: '72px',
  color: '#ED1C24',
  '@media (max-width: 768px)': {
    fontSize: '42px',
    left: '0rem',
  },
});

export const GalleryPar = styled.p({
  margin: '2rem 7.5rem',
  fontWeight: '500',
  '@media (max-width: 768px)': {
    fontSize: '16px',
    margin: '1rem 0rem',
  },
});

export const GalleryImg = styled.div({
  margin: '0rem 7.5rem 0 0',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  overflow: 'visible',
  '@media (max-width: 992px)': {
    marginLeft: '50rem',
  },
});
