import React from 'react';
import styled from 'styled-components';

//component
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
//image
import Ansan from 'assets/images/Ansan.jpg';

//common
import { Container } from 'styles/Common';

//Styled-Component
const MainContainer = styled.div`
  /* border: 2px solid blue; */
  margin-top: 150px;
  height: 500px;
`;
const IntroContainer = styled.div`
  /* border: 1px solid red; */
  margin: auto;
  width: 1000px;
  display: flex;
`;
const ImageContainer = styled.div`
  /* border: 1px solid red; */
  width: 500px;
  margin-right: 100px;
  /* position: absolute; */
  /*top: 100px;
  left: 100px; */
`;
const AnsanImage = styled.img`
  /* border: 1px solid orange; */
  width: 100%;
  margin-top: 20px;
`;
const TextContainer = styled.div`
  /* border: 1px solid red; */
  width: 500px;
  /* position: absolute;
  top: 100px;
  right: 200px; */
`;
const AnsanH1 = styled.h1`
  border-bottom: 1px solid silver;
`;
const AnsanText = styled.p`
  /* border: 1px solid blue; */
`;

function IntroPage() {
  return (
    <Container>
      {/* <Header /> */}
      <MainContainer>
        <IntroContainer>
          <ImageContainer>
            <AnsanImage src={Ansan} alt="안산시위치" />
          </ImageContainer>
          <TextContainer>
            <AnsanH1>안산시</AnsanH1>
            <AnsanText>
              안산시(安山市)는 대한민국 경기도의 남서부 서해안에 위치하는
              시이다. 북쪽으로 시흥시와 안양시, 동쪽으로 군포시와 의왕시,
              수원시, 남쪽으로 화성시와 접하고 있으며 대부도는 월경지이다.
              대부도를 중심으로 서쪽은 인천광역시 옹진군 영흥면의 선재도와
              연륙교가 연결되어 있으며, 최남단에 위치한 풍도는 지리적으로
              충청남도 당진시 및 서산시에 근접한다. 반월국가산업단지,
              시화국가산업단지를 배경으로 공업 도시로 발전하여 외국인 노동자가
              많아서 원곡동 일대가 다문화 특구로 지정되어 있다.[2] 고속국도나
              수도권 전철 등으로 서울 등지와 접근성이 높아졌으며, 시화산업단지
              개발로 공업지역 확장과 함께 고잔신도시 등을 개발하였다. 2009년
              11월 11일에는 대한민국 지방 정부 최초로 시청을 24시간 운영하기
              시작하였다.[3] 지방자치법 제175조에 의거 특례를 둘 수 있으며,
              전국대도시시장협의회 회원시이다. 안산에서는 매년 거리극 축제가
              열린다.
            </AnsanText>
          </TextContainer>
        </IntroContainer>
      </MainContainer>
      {/* <Footer /> */}
    </Container>
  );
}

export default IntroPage;
