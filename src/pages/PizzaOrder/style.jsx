import styled from 'styled-components';

export const PageContainer = styled.div({
  height: '100%',
  width: '100%',
  display: 'flex',
});

export const OrderImage = styled.div(
  {
    textAlign: 'center',
    float: 'left',
    height: '76vh',
    width: '45vw',
    margin: '5rem 0 2rem 2rem',
  },
  ({ imageUrl }) => ({
    background: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  })
);

export const OrderDetails = styled.div({
  margin: '5rem 0 2rem 2rem',
  height: '100vh',
  width: '45vw',
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
    marginLeft: '5rem',
    border: '1px solid red',
    color: '#000',
    fontFamily: 'inherit',
    fontSize: '1rem',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
});
