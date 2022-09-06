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
// images
import Slide1 from 'assets/images/ansanWaterfall.jpg';
import Slide2 from 'assets/images/ansanStreet.jpg';
import Slide3 from 'assets/images/seonghoMuseum.jpg';

import { Container } from 'styles/Common';

const Main = styled.div`
  margin-top: 150px;
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  background-color: silver;
  height: 700px;
`;
const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MainPageLogo = styled.p`
  position: absolute;
  top: 20%;
  left: 50%;
  font-size: 70px;
  color: #fff;
  z-index: 2;
`;

function MainPage() {
  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res));
  }, []);
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
            <MainImage src={Slide1} alt="노적봉폭포" />
          </SwiperSlide>
          <SwiperSlide>
            <MainImage src={Slide2} alt="안산중앙동거리" />
          </SwiperSlide>
          <SwiperSlide>
            <MainImage src={Slide3} alt="성호박물관" />
          </SwiperSlide>
        </StyledSwiper>
        <MainPageLogo>Brovo Ansan</MainPageLogo>
      </Main>
      <Footer />
    </Container>
  );
}
export default MainPage;
