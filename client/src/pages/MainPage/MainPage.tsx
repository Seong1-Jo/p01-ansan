import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import axios from 'axios';
import styled from 'styled-components';

import SearchIconImage from 'assets/images/SearchIcon.svg';

import { Container } from 'styles/Common';

const StyledSwiper = styled(Swiper)`
   /* width: 100px; */
  height: 100px; 
  background-color: silver;
  /* direction: 'vertical'; */
`;

const SearchContainer = styled.div`
  display: flex;
  background-color: pink;
  width: 1000px;
  margin: 0 auto;
  position: relative;
  flex-direction: row-reverse;
`;

const SearchInput = styled.input.attrs({
  type: 'text',
})`
  width: 50px;
  height: 70px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  transition: width 0.5s;
  font-size: 30px;
  &:focus {
    width: 50%;
  }
`;
const SearchIcon = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.color ? props.color : 'yellow')};
  background-image: url(${SearchIconImage});
  position: absolute;
  top: 0;
  bottom: 0;
  /* right: 5px; */
  margin: auto 0;
`;

function MainPage() {

  useEffect(() => {
    axios.get('/api/hello')
    .then(res => console.log(res))
  },[])
  const inputRef = useRef<HTMLInputElement>(null);
  const SearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const SearchFocus = () => {
    // focus했을때
    if (inputRef.current) {
      inputRef.current.setAttribute('placeholder', '통합검색');
    }
  };
  const SearchBlur = () => {
    // focus에 때었을때
    if (inputRef.current) {
      inputRef.current.setAttribute('placeholder', '');
    }
  };
  return (
    <Container>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={1}
        slidesPerView={1}
        // onSlideChange={() => console.log('슬라이드')}
        navigation
        // pagination={{clickable: true}}
        // scrollbar={{ draggable: true }}
        direction='vertical'
      >
        <SwiperSlide>slide 1</SwiperSlide>
        <SwiperSlide>slide 2</SwiperSlide>
        <SwiperSlide>slide 3</SwiperSlide>
        <SwiperSlide>slide 4</SwiperSlide>
        <SwiperSlide>slide 3</SwiperSlide>
        <SwiperSlide>slide 4</SwiperSlide>
        <SwiperSlide>slide 3</SwiperSlide>
        <SwiperSlide>slide 4</SwiperSlide>
      </StyledSwiper>
      메인페이지
      <SearchContainer onClick={SearchClick}>
        <SearchInput ref={inputRef} onFocus={SearchFocus} onBlur={SearchBlur} />
        <SearchIcon color="green" />
      </SearchContainer>
    </Container>
  );
}
export default MainPage;
