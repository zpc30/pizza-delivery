import { AppBody } from './AppStyle';
import Home from './pages/Home';

function App() {
  const nameField = 'name';

  const myObj = {
    name: 'John',
    age: 22,
  };

  const myObjStr = {
    [nameField]: 'Jane',
  };

  const myObjStar = {
    '&:hover': 'my&value',
  };

  console.log(myObj);
  console.log(myObjStr);
  console.log(myObjStar);

  return (
    <AppBody>
      {/* <Navigation />
      <Hero />
      <AboutUs />
      <Gallery />
      <Menu />
      <Footer /> */}
      <Home />
    </AppBody>
  );
}

export default App;
