import { useLocation } from 'react-router';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const uri = useLocation();
  return (
    <>
      <Header uri={uri} />
      <Main appName={process.env.REACT_APP_NAME} />
      <Footer/>
    </>
  );
}

export default App;
