import styled from 'styled-components';

export const ModalBody = styled.div({
  // width: '400px',
  // height: '400px',
  backgroundColor: '#666',
  color: '#fff',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '20px',
});

export const ModalContainer = styled.div({
  display: 'flex',
  // backgroundColor: 'red',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
  // textAlign: 'center',
  // margin: '2rem 0',
  h1: {
    fontSize: '3rem',
    // position: 'absolute',
    // top: '1rem',
  },
  p: {
    padding: '0.5rem',
    fontSize: '1.5rem',
    textAlign: 'center',
    // width: '80%',
  },
});

export const ModalButtons = styled.div({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  // bottom: 20,
  gap: '1rem',
});

export const OrderBtn = styled.button({
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
  marginLeft: '3rem',
  border: '1px solid red',
  color: '#000',
  fontFamily: 'inherit',
  fontSize: '1rem',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});
