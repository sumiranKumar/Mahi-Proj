import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import PortfolioPage from './components/Portfoliopage';
import Services from './components/Services';
import About from './components/About';
import ClientsAlbums from './components/ClientsAlbums';
import Contact from './components/Contact';
import Home from './components/Home';
import Portraits from './components/Portraits';
import Family from './components/Family';
import Weading from './components/Weading';
import PreWeading from './components/PreWeading';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
    <BrowserRouter>
     <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/portraits" element={<Portraits />} />
        <Route path="/portfolio/family" element={<Family />} />
        <Route path="/portfolio/wedding" element={<Weading />} />
        <Route path="/portfolio/pre-wedding" element={<PreWeading />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients-albums" element={<ClientsAlbums />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
