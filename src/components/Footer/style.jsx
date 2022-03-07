import styled from 'styled-components';

export const FooterLine = styled.hr({
  border: '1px solid #ED1C24',
  width: '95vw',
  marginBottom: '2rem',
});

export const FooterContainer = styled.div({
  padding: '3rem',
  position: 'relative',
});

export const FooterFlex = styled.div({
  display: 'flex',
});

export const FooterMenu = styled.div({
  marginLeft: '10rem',
});

export const FooterLinks = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const FooterSocial = styled.div({
  marginTop: '7rem',
});

export const FooterLogo = styled.img({
  width: '136px',
});

export const FooterBgPizza = styled.img({
  position: 'absolute',
  bottom: '-8rem',
  right: '-20rem',
  width: '787px',
  zIndex: '-1',
  opacity: '.3',
});
