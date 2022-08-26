import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  margin: 0 auto; //가운데 정렬
`;

const FormLogin = styled.form`
  border: 2px solid blue;
  /* width: 800px; */
  height: 500px;
  display: flex;
  flex-direction: column;
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
  };
  return (
    <LoginContainer>
      <FormLogin onSubmit={LoginOnSubmit}>
        <InputLogin value={loginId} onChange={LoginIdChange} />
        <InputPassword value={loginPw} onChange={LoginPwChange} />
        <ButtonLogin>로그인</ButtonLogin>
      </FormLogin>
    </LoginContainer>
  );
}

export default LoginPage;
