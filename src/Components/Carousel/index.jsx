import { useState, useEffect, useRef } from 'react';
import Image from './Image'
import Arrow from './Arrow';

const Carousel = ({data}) => {
  const [positionCarousel, setPositionCarousel] = useState(0);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const lenghtCard = 135;
  const carouselScroll = useRef(null);

  const handleClickArrowLeft = (event) => {
    setPositionCarousel(positionCarousel - lenghtCard);
    
    carouselScroll.current.scroll({
      left: positionCarousel - lenghtCard,
      behavior: "smooth",
    })
  }

  const handleClickArrowRight = (event) => {
    setPositionCarousel(positionCarousel + lenghtCard);
    
    carouselScroll.current.scroll({
      left: positionCarousel + lenghtCard,
      behavior: "smooth",
    })
  }

  const handleScrollCarousel = (event) => {
    if(carouselScroll.current.scrollLeft <= 20){
      setShowArrowLeft(false);
    }else{
      setShowArrowLeft(true);
    }

    if(carouselScroll.current.offsetWidth + carouselScroll.current.scrollLeft >= carouselScroll.current.scrollWidth - 20){
      setShowArrowRight(false);
    }else{
      setShowArrowRight(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      handleScrollCarousel();
    }, 100)
  });
  return (
    <div>
      <div>
        <button onClick={handleClickArrowLeft}>
          <Arrow direction="left" show={showArrowLeft} />
        </button>
        <button onClick={handleClickArrowRight}>
          <Arrow direction="right" show={showArrowRight} />
        </button>
      </div>
      <div ref={carouselScroll} onScroll={handleScrollCarousel} className="flex overflow-x-auto hidden-scrollbar transition-all">
        <Image path="/images/movies/spider-man.jpg" />
        <Image path="/images/movies/spider-man.jpg" />
        <Image path="/images/movies/spider-man.jpg" />
        <Image path="/images/movies/spider-man.jpg" />
        <Image path="/images/movies/elemental.jpg" />
        <Image path="/images/movies/elemental.jpg" />
        <Image path="/images/movies/elemental.jpg" />
      </div>
    </div>
  )
}

export default Carousel