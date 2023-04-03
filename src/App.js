import './App.css';
import Header from './components/Header';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Games from './components/Games';
import Aboutus from './components/Aboutus';
import Ourteam from './components/Ourteam';
import Career from './components/Career';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import BoostrapHeader from './components/BoostrapHeader';
import Game2 from './components/Game2';
// import { Route, Routes } from 'react-router-dom';


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
