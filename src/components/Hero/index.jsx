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

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src="./images/coverHero.png" />
      <HeroText>
        <HeroH1>
          Whatever the question, <br />
          <HeroSpan>pizza</HeroSpan> is the answer
        </HeroH1>
        <OrderBtn>Order Now!</OrderBtn>
        <JoinBtn>Join Us!</JoinBtn>
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