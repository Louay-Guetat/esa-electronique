
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import '../css/components/navbar.css'

const Navbar = () =>{
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 160);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 
  

    return(
        <div id='navbar' className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="left-content"></div>
            <div className="main-navbar">
                <button onClick={() => handleScroll('home')}> Accueil </button>
                <button onClick={() => handleScroll('about')}> Qui sommes nous? </button>
                <button onClick={() => handleScroll('services')}> Services </button>
                <button onClick={() => handleScroll('partners')}> Nos Partenaires </button>
                <button onClick={() => handleScroll('contact')}> Contact </button>
                <FontAwesomeIcon id='search' icon={faMagnifyingGlass} />
            </div>
            <div className="right-content"></div>
        </div>
    )
}

export default Navbar;