import Hello from './components/Hello';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';
import AboutUs from './components/AboutUs/AboutUs';
import { AppBody } from './AppStyle';
import Gallery from './components/Gallery/Gallery';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AppBody>
      <Navigation />
      <Hero />
      <AboutUs />
      <Gallery />
      <Menu />
      <Footer />
    </AppBody>
  );
}

export default App;
