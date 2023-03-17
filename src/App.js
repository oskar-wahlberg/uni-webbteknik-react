import Index from './pages/Index';
import Meny from './pages/Meny';
import Oppettider from './pages/Oppettider';
import OmOss from './pages/OmOss';
import Kontakt from './pages/Kontakt';

import Header from './components/Header';
import Footer from './components/Footer';

// routing for websites
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import css
import './stylesheets/imported/Reset.css';
import './stylesheets/Main.css';
import './stylesheets/Index.css';
import './stylesheets/Meny.css';
import './stylesheets/Oppettider.css';
import './stylesheets/OmOss.css';
import './stylesheets/Kontakt.css';

function App() {
  return (
    <div id="app-holder">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/meny' element={<Meny/>}/>
          <Route path='/oppettider' element={<Oppettider/>}/>
          <Route path='/om_oss' element={<OmOss/>}/>
          <Route path='/kontakt' element={<Kontakt/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
