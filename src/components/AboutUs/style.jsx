import styled from 'styled-components';

export const AboutContainer = styled.div({
  display: 'flex',
  gap: '10rem',
  width: '80vw',
  margin: '5rem auto',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 992px)': {
    flexDirection: 'column',
    gap: '3rem',
  },
});

export const AboutText = styled.div({
  width: '60ch',
  '@media (max-width: 768px)': {
    width: '35ch',
  },
});

export const AboutH1 = styled.h1({
  fontSize: '72px',
  color: '#ED1C24',
  '@media (max-width: 768px)': {
    fontSize: '42px',
  },
});

export const AboutPar = styled.p({
  fontSize: '24px',
  fontWeight: '500',
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
});

export const AboutImg = styled.img({
  width: '337px',
});
