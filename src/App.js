import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

import './css/App.css';

function App() {
  return (
    <div className='App'>
      <div className='logo'> <img src='/logo/logo.png' alt='logo' /> </div>
      <Navbar />
        <Home />
        <About />
        <Services />
        <Partners />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
