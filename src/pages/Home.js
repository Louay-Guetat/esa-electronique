
import { useState, useEffect } from 'react'
import '../css/pages/home.css'

const desktopSlides = ['/banners/Banner1.png','/banners/Banner2.png', '/banners/Banner3.png']
const mobileSlides = ['./banners/Banner1-mob.jpg','./banners/Banner2-mob.jpg','./banners/Banner3-mob.jpg']

const Home = () =>{

    const [slideIndex, setSlideIndex] = useState(1);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      showSlides(slideIndex);
    }, [slideIndex]);
  
    const nextSlide = (n) => {
      if(slideIndex === 3){
        setSlideIndex(1)
      }else{
        setSlideIndex((prevIndex) => prevIndex + n);
      }
    };

    const previousSlide = (n) =>{
        if(slideIndex === 1){
            setSlideIndex(3)
        }else{
            setSlideIndex((prevIndex) => prevIndex +n)
        }
    }
  
    const currentSlide = (n) => {
      setSlideIndex(n);
    };
  
    const showSlides = (n) => {
      let i;
      let slides = document.getElementsByClassName('mySlides');
      let dots = document.getElementsByClassName('dot');
      if (n > slides.length) setSlideIndex(1);
      if (n < 1) setSlideIndex(slides.length);
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide(+1);
        }, 5000);

        return () => clearInterval(intervalId);

    }, [slideIndex]);


    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <div id='home' className='home'>
            <div id='desktop' className="desktop-slider"></div>
            {screenWidth >= 554 ? (
                <div>
                <div className="mySlides animate-left">
                    <img src={desktopSlides[0]} alt="Banner1" />
                </div>
            
                <div className="mySlides animate-left">
                    <img src={desktopSlides[1]} alt="Banner2" />
                </div>
            
                <div className="mySlides animate-left">
                    <img src={desktopSlides[2]} alt="Banner3" />
                </div>
                </div>
            ) : (
                <div>
                <div className="mySlides animate-left">
                    <img src={mobileSlides[0]} alt="Banner1" />
                </div>
            
                <div className="mySlides animate-left">
                    <img src={mobileSlides[1]} alt="Banner2" />
                </div>
            
                <div className="mySlides animate-left">
                    <img src={mobileSlides[2]} alt="Banner3" />
                </div>
                </div>
            )}
            
            <a className="prev" onClick={() => previousSlide(-1)}>
                ❮
            </a>
            <a className="next" onClick={() => nextSlide(1)}>
                ❯
            </a>
        
            <div style={{ textAlign: 'center' }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </div>
    )
}

export default Home;