import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Inner = styled.div`
  /* background-color: orange; */
  width: 1000px;
  margin: 0 auto; //가운데 정렬
  position: relative;
`;
const HContainer = styled.header`
  color: #333;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #c8c8c8;
  /* background-color: #c3c6ca; */
  & > ${Inner} {
    // & > 바로 아래자식에게만적용!
    height: 150px;
  }
`;
const LinkLogo = styled(Link)``;
const Logo = styled.span`
  height: 32px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const SecondMenuUl = styled.ul`
  display: flex;
  position: absolute;
  right: 0;
`;
const SecondMenuLi = styled.li`
  list-style: none;
  position: relative;
  ::before {
    content: '';
    width: 1px;
    height: 12px;
    background-color: #e5e5e5;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  &:first-child::before {
    // 로그인 앞에 선 없애는 코드
    display: none;
  }
`;
const StyleLink = styled(Link)`
  background-color: white;
  display: block;
  padding: 11px 16px;
  text-decoration: none;
  color: #666;
  &:hover {
    color: #000;
  }
`;
const FirstMenuUl = styled.ul`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3; // 높게하면 드롭다운이 맨위에 있게된다.
`;

const FMenuDropTitle = styled.div`
  padding: 10px 20px 35px 20px;
  font-size: 20px;
`;
const FMenuDropList = styled.div`
  // 가상선택자를위해서 위치변경 부모엘리먼트위에 옮김
  width: 100%;
  position: fixed;
  left: 0;
  display: none; //drop을 안보이게한다.
`;
const FirstMenuIi = styled.li`
  list-style: none;
  &:hover ${FMenuDropTitle} {
    // li에 해야 drop다운까지 hover가 된다.
    color: red;
    background-color: blue;
  }
  &:hover ${FMenuDropList} {
    display: block; //hover를 하면 none했던것이 블록으로바뀌며화면에 출력된다.
  }
`;

const FMenuDropItem = styled.div`
  background-color: red;
  height: 300px;
  & > ${Inner} {
    // & > 바로 아래자식에게만적용!
    font-size: 50px;
    display: flex;
  }
`;
const DropTitle = styled.div`
  background-color: white;
`;
const DropItemUl = styled.ul`
  background-color: aliceblue;
  position: absolute;
  left: 30%;
  font-size: 30px;
`;

function Header() {
  return (
    <HContainer>
      <Inner>
        <LinkLogo to="/">
          <Logo className="logo">AnsanTrip</Logo>
        </LinkLogo>
        <SecondMenuUl>
          <SecondMenuLi>
            <StyleLink to="/login">로그인</StyleLink>
          </SecondMenuLi>
          <SecondMenuLi>
            <StyleLink to="/register">회원가입</StyleLink>
          </SecondMenuLi>
        </SecondMenuUl>
        <FirstMenuUl>
          <FirstMenuIi>
            <FMenuDropTitle>안산</FMenuDropTitle>
            <FMenuDropList>
              <FMenuDropItem>
                <Inner>
                  <DropTitle>안산</DropTitle>
                  <DropItemUl>
                    <li>안산소개</li>
                    <li>행사</li>
                  </DropItemUl>
                </Inner>
              </FMenuDropItem>
            </FMenuDropList>
          </FirstMenuIi>
          <FirstMenuIi>
            <FMenuDropTitle>여행지</FMenuDropTitle>
            <FMenuDropList>
              <FMenuDropItem>
                <Inner>
                  <DropTitle>여행지</DropTitle>
                  <DropItemUl>
                    <li>호수공원</li>
                    <li>폭폭호수</li>
                  </DropItemUl>
                </Inner>
              </FMenuDropItem>
            </FMenuDropList>
          </FirstMenuIi>
          <FirstMenuIi>
            <FMenuDropTitle>지역맛집</FMenuDropTitle>
            <FMenuDropList>
              <FMenuDropItem>
                <Inner>
                  <DropTitle>지역맛집</DropTitle>
                  <DropItemUl>
                    <li>고잔동</li>
                    <li>일동</li>
                    <li>이동</li>
                  </DropItemUl>
                </Inner>
              </FMenuDropItem>
            </FMenuDropList>
          </FirstMenuIi>
        </FirstMenuUl>
        {/* <ul>
            <li>
              <Link to="/intro">안산소개</Link>
            </li>
            <li>
              <Link to="/local">안산지역별관광</Link>
            </li>
            <li>
              <Link to="/food">지역별맛집</Link>
            </li>
          </ul> */}
      </Inner>
    </HContainer>
  );
}

export default Header;
