import styled from 'styled-components';

export const HeroContainer = styled.div({
  position: 'relative',
  width: '100vw',
  height: '750px',
});

export const HeroImage = styled.img({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const HeroText = styled.div({
  position: 'absolute',
  top: '50%',
  left: '7.5rem',
  transform: 'translateY(-50%)',
});

export const HeroH1 = styled.h1({
  fontSize: '92px',
  fontWeight: '700',
  color: 'white',
});

export const HeroSpan = styled.span({
  color: '#F9A72B',
});

export const JoinBtn = styled.button({
  padding: '0.8rem 2rem',
  marginRight: '1rem',
  fontSize: '1.1rem',
  border: 'none',
  fontWeight: '600',
  borderRadius: '3px',
  cursor: 'pointer',
  backgroundColor: '#ED1C24',
  color: '#fff',
});
export const OrderBtn = styled.button({
  padding: '0.8rem 2rem',
  marginRight: '1rem',
  fontSize: '1.1rem',
  fontWeight: '600',
  border: '1px solid #F9A72B',
  borderRadius: '3px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: '#F9A72B',
});

export const SocialLinks = styled.div({
  position: 'absolute',
  bottom: '2rem',
  right: '7.5rem',
});

export const SocialImg = styled.img({
  marginLeft: '1rem',
});
