import React, { useRef } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styled from 'styled-components';
import SearchIconImage from 'assets/images/SearchIcon.svg';

import { Container } from 'styles/Common';

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
      메인페이지
      <SearchContainer onClick={SearchClick}>
        <SearchInput ref={inputRef} onFocus={SearchFocus} onBlur={SearchBlur} />
        <SearchIcon color="green" />
      </SearchContainer>
      <Footer />
    </Container>
  );
}
export default MainPage;
