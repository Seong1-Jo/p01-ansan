import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const HContainer = styled.header`
  color: #333;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid black;
  background-color: #c3c6ca;
`;
const Inner = styled.div`
  background-color: orange;
  width: 1000px;
  height: 120px;
  margin: 0 auto; //가운데 정렬
  position: relative;
`;
const Logo = styled.span`
  height: 32px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;
const SecondMenuContainer = styled.div``;
const SecondMenuUl = styled.ul`
  display: flex;
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

function Header() {
  return (
    <HContainer>
      <Inner>
        <Link to="/">
          <Logo className="logo">AnsanTrip</Logo>
        </Link>
        <SecondMenuContainer>
          <SecondMenuUl>
            <SecondMenuLi>
              <StyleLink to="/login">로그인</StyleLink>
            </SecondMenuLi>
            <SecondMenuLi>
              <StyleLink to="/register">회원가입</StyleLink>
            </SecondMenuLi>
          </SecondMenuUl>
        </SecondMenuContainer>
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
