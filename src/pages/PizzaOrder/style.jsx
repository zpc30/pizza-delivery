import styled from 'styled-components';

export const PageContainer = styled.div({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
});

export const OrderImage = styled.div(
  {
    textAlign: 'center',
    float: 'left',
    height: '50vh',
    width: '95vw',
    margin: '3rem auto',
    '@media (min-width: 768px)': {
      height: '74vh',
      margin: '5rem 2rem',
    },
  },
  ({ imageUrl }) => ({
    background: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  })
);

export const OrderDetails = styled.div({
  margin: '0rem  2rem ',
  height: '115vh',
  width: '90vw',

  h3: {
    textAlign: 'left',
    fontSize: '4rem',
    fontWeight: '200',
    marginBottom: '2rem',
  },
  p: {
    marginTop: '2rem',
    marginBottom: '2rem',
    fontSize: '1.2rem',
    fontWeight: '100',
  },
  h4: {
    marginTop: '3rem',
    fontSize: '2rem',
    fontWeight: '400',
  },
  button: {
    display: 'block',
    padding: '0.8rem 1.2rem',
    margin: '3rem auto',
    border: '1px solid red',
    color: '#000',
    fontFamily: 'inherit',
    fontSize: '1rem',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '@media (min-width: 768px)': {
    margin: '5rem 2rem',
  },
});
