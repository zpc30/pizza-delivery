import Hello from './components/Hello';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';
import AboutUs from './components/AboutUs/AboutUs';
import { AppBody } from './AppStyle';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <AppBody>
      <Navigation />
      <Hero />
      <AboutUs />
      <Gallery />
    </AppBody>
  );
}

export default App;
