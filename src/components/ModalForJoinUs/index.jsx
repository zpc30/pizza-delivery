import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CancelBtn,
  FormBody,
  FormContainer,
  FormFooter,
  FormHeading,
  ModalBody,
  ModalHeading,
  SumbitBtn,
} from './style';

const JoinUs = ({ isOpen, onToggle }) => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Age: 0,
    Experience: 0,
    Email: '',
  });
  toast.configure();

  const formCheck = (formData) => {
    if (
      formData.FirstName === '' ||
      formData.LastName === '' ||
      formData.Age === 0 ||
      formData.Experience === 0 ||
      formData.Email === ''
    ) {
      return toast.error('You need to fill all fields!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
    return toast.success('We received your msg!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };
  return (
    isOpen && (
      <ModalBody onToggle={onToggle} imageUrl={'../images/joinUS.jpeg'}>
        <ModalHeading>
          <h1>Become one of us!</h1>
        </ModalHeading>
        <FormContainer>
          <FormHeading>
            <h1>Enter your details</h1>
          </FormHeading>
          <FormBody>
            <label for={'FirstName'}>Enter your firstname</label>
            <input
              type={'text'}
              placeholder={'FirstName'}
              value={formData.FirstName}
              onChange={(e) =>
                setFormData({ ...formData, FirstName: e.target.value })
              }
            ></input>
            <label for={'LastName'}>Enter your lastname</label>
            <input
              type={'text'}
              placeholder={'LastName'}
              value={formData.LastName}
              onChange={(e) =>
                setFormData({ ...formData, LastName: e.target.value })
              }
            ></input>
            <label for={'Age'}>Enter your Age</label>
            <input
              type={'number'}
              placeholder={'Age'}
              value={formData.Age}
              onChange={(e) =>
                Number(setFormData({ ...formData, Age: e.target.value }))
              }
            ></input>
            <label for={'Experience'}>Enter your Work Experience</label>
            <input
              type={'number'}
              placeholder={'Experience/Months'}
              value={formData.Experience}
              onChange={(e) =>
                Number(setFormData({ ...formData, Experience: e.target.value }))
              }
            ></input>
            <label for={'Email'}>Enter your Email</label>
            <input
              type={'text'}
              placeholder={'Example@mail.com'}
              value={formData.Email}
              onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
            ></input>
          </FormBody>
          <FormFooter>
            <SumbitBtn onClick={() => formCheck(formData)}>Aplly!</SumbitBtn>
            <CancelBtn onClick={onToggle}>Cancel</CancelBtn>
          </FormFooter>
        </FormContainer>
      </ModalBody>
    )
  );
};

export default JoinUs;
