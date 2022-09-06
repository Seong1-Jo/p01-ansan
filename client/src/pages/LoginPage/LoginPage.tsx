import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';

//component
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Container } from 'styles/Common';

const LoginContainer = styled.div`
  margin: 0 auto; //가운데 정렬
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

const FormLogin = styled.form`
  //회원가입 스타일 컴포넌트와 겹침!
  border: 2px solid blue;
  /* width: 800px; */
  height: 500px;
`;
const InputLogin = styled.input.attrs({
  type: 'email',
  placeholder: '아이디',
})`
  width: 50%;
`;
const InputPassword = styled.input.attrs({
  type: 'password',
  placeholder: '비밀번호',
})`
  width: 50%;
`;
const ButtonLogin = styled.button.attrs({
  type: 'submit',
})`
  width: 50%;
`;
function LoginPage() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState<string>('');
  const [loginPw, setLoginPw] = useState<string>('');
  const LoginIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };
  const LoginPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPw(e.target.value);
  };
  const LoginOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginId, loginPw);
    let body = {
      email: loginId,
      password: loginPw,
    };
    axios.post('/api/users/login', body).then((res) => {
      if (res.data.loginSuccess) {
        navigate('/');
      } else {
        console.log('로그인실패');
      }
    });
  };
  return (
    <Container>
      <Header />
      <LoginContainer>
        <FormLogin onSubmit={LoginOnSubmit}>
          <InputLogin value={loginId} onChange={LoginIdChange} />
          <InputPassword value={loginPw} onChange={LoginPwChange} />
          <ButtonLogin>로그인</ButtonLogin>
        </FormLogin>
      </LoginContainer>
      <Footer />
    </Container>
  );
}

export default LoginPage;
