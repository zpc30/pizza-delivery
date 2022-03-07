import { AboutContainer, AboutText, AboutImg, AboutH1, AboutPar } from './style';

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutText>
        <AboutH1>About us!</AboutH1>
        <AboutPar>
          Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the
          18th or early 19th century. The word pizza was first documented in 997 AD
          in Gaeta and successively in different parts of Central and Southern Italy.
          Pizza was mainly eaten in Italy and by emigrants from there.
        </AboutPar>
      </AboutText>
      <AboutImg src="./images/aboutUs.png" />
    </AboutContainer>
  );
};

export default AboutUs;
