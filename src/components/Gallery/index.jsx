import { GalleryContainer, GalleryH1, GalleryImg, GalleryPar } from './style';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryH1>Gallery</GalleryH1>
      <GalleryPar>
        Pizza is a dish of Italian origin consisting of a usually round, flat base of
        leavened wheat-based dough topped with tomatoes, cheese, and often various
        other ingredients.
      </GalleryPar>
      <GalleryImg>
        <img src="./images/slide1.png" />
        <img src="./images/slide2.png" />
        <img src="./images/slide3.png" />
      </GalleryImg>
    </GalleryContainer>
  );
};

export default Gallery;
