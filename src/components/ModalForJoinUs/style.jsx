import styled from 'styled-components';

export const ModalBody = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '20px',
    color: '#333',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80vw',
    zIndex: 1,
    overflow: 'hidden',
  },
  ({ imageUrl }) => ({
    background: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  })
);

export const ModalHeading = styled.div({
  h1: {
    fontSize: '2rem',
    paddingBottom: '2rem',
  },
});

export const Form = styled.div({});

export const FormContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const FormHeading = styled.div({
  h1: {
    fontSize: '2rem',
    paddingBottom: '1rem',
  },
});

export const FormBody = styled.form({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  input: {
    padding: '0.5rem',
  },
  label: {
    fontSize: '1.2rem',
    fontWeight: '400',
    padding: '0.8rem',
  },
});

export const FormFooter = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '3rem',
  padding: '2rem  0',
});

export const SumbitBtn = styled.button({
  display: 'block',
  padding: '0.8rem 1.2rem',
  border: '1px solid red',
  color: '#000',
  fontFamily: 'inherit',
  fontSize: '1rem',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const CancelBtn = styled.button({
  display: 'block',
  padding: '0.8rem 1.2rem',
  border: '1px solid red',
  color: '#000',
  fontFamily: 'inherit',
  fontSize: '1rem',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});
