import { useLocation } from 'react-router';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const uri = useLocation();
  return (
    <>
      <Header uri={uri} />
      <Main uri={uri} />
      <Footer/>
    </>
  );
}

export default App;
