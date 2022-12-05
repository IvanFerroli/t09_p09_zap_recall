import Top from './components/Top'
import Display from './components/Display'
import Footer from './components/Footer'
import Deck from './Deck'

function App() {
  return (
    <>
      <Top />
      <Display deck={Deck}/>
      <Footer />
    </>
  );
}

export default App;
