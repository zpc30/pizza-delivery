import React from 'react';
import Modal from '../Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalButtons, OrderBtn, CancelBtn } from './style';

const ConfirmOrder = ({ isOpen, onToggle, itemPrice }) => {
  toast.configure();
  const notify = () => {
    toast.success(`Your order is accepted it will cost you ${itemPrice} $`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <Modal isOpen={isOpen} onToggle={onToggle}>
      <div style={{ background: 'red', textAlign: 'center' }}>
        <h1>Hello threre</h1>
        <p>
          We are glad that you order from us, just one tiny step, confirm your order
          and pizza will be on it's way
        </p>
      </div>
      <ModalButtons style={{ margin: '0.75rem 0' }}>
        <OrderBtn
          onClick={() => {
            notify();
            onToggle();
          }}
        >
          Order now!
        </OrderBtn>
        <CancelBtn onClick={onToggle}>Cancel Order!</CancelBtn>
      </ModalButtons>
    </Modal>
  );
};

export default ConfirmOrder;
