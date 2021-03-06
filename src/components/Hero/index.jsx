import {
  HeroContainer,
  HeroH1,
  HeroImage,
  HeroSpan,
  HeroText,
  JoinBtn,
  OrderBtn,
  SocialImg,
  SocialLinks,
} from './style';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinUs from '../ModalForJoinUs';

const Hero = () => {
  const [openModal, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const routeChange = () => navigate('../Menu');
  return (
    <HeroContainer>
      <JoinUs isOpen={openModal} onToggle={() => setModalOpen(!openModal)} />
      <HeroImage src="./images/coverHero.png" />
      <HeroText>
        <HeroH1>
          Whatever the question, <br />
          <HeroSpan>pizza</HeroSpan> is the answer
        </HeroH1>
        <OrderBtn onClick={() => routeChange()}>Order Now!</OrderBtn>
        <JoinBtn
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Join Us!
        </JoinBtn>
      </HeroText>
      <SocialLinks>
        <a href="#">
          <SocialImg src="./images/facebook.svg" alt="" />
        </a>
        <a href="#">
          <SocialImg src="./images/twitter.svg" alt="" />
        </a>
        <a href="#">
          <SocialImg src="./images/instagram.svg" alt="" />
        </a>
      </SocialLinks>
    </HeroContainer>
  );
};

export default Hero;
