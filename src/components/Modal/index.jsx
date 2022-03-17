import {
  ModalBody,
  ModalContainer,
  ModalButtons,
  OrderBtn,
  CancelBtn,
} from '../ModalForOrder/style';

const Modal = ({ isOpen, onToggle, children }) => {
  return (
    isOpen && (
      <ModalBody>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
          <button
            onClick={onToggle}
            style={{ width: '30px', height: '30px', margin: '0.5rem' }}
          >
            X
          </button>
        </div>
        <ModalContainer>{children}</ModalContainer>
      </ModalBody>
    )
  );
};

export default Modal;
