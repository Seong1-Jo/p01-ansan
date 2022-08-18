import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import SearchIconImage from 'assets/images/SearchIcon.svg';

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
const SecondMenuUl = styled.ul``;
const SecondMenuLi = styled.li``;

const Search = styled.div``;
const SearchIcon = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid red;
  background-image: url(${SearchIconImage});
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
              <Link to="/login">로그인</Link>
            </SecondMenuLi>
            <SecondMenuLi>
              <Link to="/register">회원가입</Link>
            </SecondMenuLi>
          </SecondMenuUl>
          <Search>
            <input type="text" />
            <SearchIcon />
          </Search>
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
