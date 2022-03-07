import { GalleryH1 } from './style';

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <p>
        Pizza is a dish of Italian origin consisting of a usually round, flat base of
        leavened wheat-based dough topped with tomatoes, cheese, and often various
        other ingredients.
      </p>
      <div>
        <img src="./images/slide1.png" />
        <img src="./images/slide2.png" />
      </div>
    </div>
  );
};

export default Gallery;
