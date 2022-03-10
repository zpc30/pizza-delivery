import styled from 'styled-components';

export const FooterLine = styled.hr({
  border: '2px solid #ED1C24',
  width: '95vw',
  marginBottom: '2rem',
});

export const FooterContainer = styled.div({
  padding: '2.5rem',
  textAlign: 'center',
  color: 'red',
});

export const FooterFlex = styled.div({
  display: 'flex',
  textAlign: 'left',
  p: {
    margin: '0.5rem 0',
    color: 'red',
  },
});

export const FooterMenu = styled.div({
  marginLeft: '5rem',
});

export const FooterLinks = styled.div({
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  a: {
    textDecoration: 'none',
    fontSize: '1.2rem',
    color: 'red',
    // marginBottom: '1rem',
  },
});

export const FooterSocial = styled.div({
  display: 'flex',
  width: '150px',
  marginTop: '4rem',
  marginBottom: '4rem',
  justifyContent: 'space-evenly',
});

export const FooterLogo = styled.img({
  width: '136px',
});
