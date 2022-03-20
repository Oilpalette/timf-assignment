import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import CarouselItem from './CarouselItem';
import carouselItems from '../static/carouselItems';

export const CarouselContainer = styled.main`
  width: 100%;

  overflow: hidden;
  position: relative;

  @media (max-width: 576px){
    height: 20rem;  
  }
`;

export const ItemContainer = styled.section`
  width: 100%;

  display: flexbox;
`

export const SlideBtn = styled.button`
  width: 15%;

  position: absolute;
  top: 0;
  bottom: 0;
  
  background: transparent;
  border: none;
  opacity: .5;

  svg {
    width: 20px;
    height: 20px;
  }

  &#prevBtn {
    left: 0;
  }

  &#nextBtn {
    right: 0;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const ItemIndicator = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;

  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  margin-bottom: 1rem;
  list-style: none;

  li {
    position: relative;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    background-color: #fff;
    opacity: 0.5;

    &.focused {
      opacity: 1;
    }
  }
`

export default function Carousel() {

  const [currentIdx, setCurrentIdx] = useState(0);
  const slideRef = useRef<any>();

  const handleIdxChange = (direction: number) => {
    if(currentIdx + direction < 0){
      setCurrentIdx(carouselItems.length-1);
    } else if(currentIdx+direction >=  carouselItems.length){
      setCurrentIdx(0);
    } else {
      setCurrentIdx(currentIdx + direction);
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentIdx}00%)`;
  }, [currentIdx]);

  useEffect(() => {
    const slideInterval = setTimeout(() => {
      setCurrentIdx((currentIdx + 1) % carouselItems.length);
    }, 3000);
    return () => clearTimeout(slideInterval);
  }, [currentIdx])

  return (
    <CarouselContainer>
      <ItemContainer ref={slideRef}>
        <CarouselItem item={carouselItems[carouselItems.length - 1]} />
        {carouselItems.map((item) => <CarouselItem item={item} />)}
        <CarouselItem item={carouselItems[0]} />
      </ItemContainer>
      <SlideBtn id="prevBtn" onClick={() => handleIdxChange(-1)}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'>
          <path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z' />
        </svg>
      </SlideBtn>
      <SlideBtn id="nextBtn" onClick={() => handleIdxChange(1)}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'>
          <path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z' />
        </svg>
      </SlideBtn>
      <ItemIndicator>
        {carouselItems.map((el, idx) => 
          <li className={idx === currentIdx ? "focused" : ""} />
        )}
      </ItemIndicator>
    </CarouselContainer>
  );
}