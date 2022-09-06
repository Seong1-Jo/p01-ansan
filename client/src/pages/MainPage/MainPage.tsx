import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'; //modules
import axios from 'axios';
import styled from 'styled-components';

//component
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// icons
import SearchIconImage from 'assets/images/SearchIcon.svg';
// images
import Slide1 from 'assets/images/waterfall.jpg';
import Slide2 from 'assets/images/seoul01.jpg';
import Slide3 from 'assets/images/city01.jpg';

import { Container } from 'styles/Common';

const Main = styled.div`
  margin-top: 150px;
`;

const StyledSwiper = styled(Swiper)`
  /* height: 100px; */
  background-color: silver;
  /* position: absolute; */
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
    axios.get('/api/hello').then((res) => console.log(res));
  }, []);
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
      <Header />
      <Main>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }} //수동시 멈춤 현상 취소
          loop={true} //무한루프
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // direction="vertical"
          // onSlideChange={() => console.log('슬라이드')}
        >
          <SwiperSlide>
            <img src={Slide1} alt="메인이미지1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} alt="메인이미지2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} alt="메인이미지3" />
          </SwiperSlide>
        </StyledSwiper>
        메인페이지
        <SearchContainer onClick={SearchClick}>
          <SearchInput
            ref={inputRef}
            onFocus={SearchFocus}
            onBlur={SearchBlur}
          />
          <SearchIcon color="green" />
        </SearchContainer>
      </Main>
      <Footer />
    </Container>
  );
}
export default MainPage;
