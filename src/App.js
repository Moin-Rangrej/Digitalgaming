import './App.css';
import Home from './components/Home';
import Games from './components/Games';
import Aboutus from './components/Aboutus';
import Ourteam from './components/Ourteam';
import Career from './components/Career';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import BoostrapHeader from './components/BoostrapHeader';


function App() {
  return (
    <div className="App">
    <BoostrapHeader/>
      <Home />
      <Games />
      <Aboutus />
      <Ourteam />
      <Career />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
