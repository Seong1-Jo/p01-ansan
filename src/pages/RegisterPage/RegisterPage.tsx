import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  border: 2px solid red;
  height: 500px;
  display: flex;
  flex-direction: column;
`;
const FormRegister = styled.form`
  border: 2px solid blue;
  width: 600px;
  height: 400px;
  margin: auto; //가운데 정렬
  text-align: center; //자식 가운데 정렬!
`;
const ButtonRegister = styled.button.attrs({
  type: 'submit',
})`
  width: 70%;
  height: 30px;
`;
const InputRegister = styled.input`
  width: 70%;
  height: 40px;
  margin-bottom: 30px;
`;

function RegisterPage() {
  const [registerId, setRegisterId] = useState<string>('');

  const IdChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterId(e.target.value);
  };

  const RegisterOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerId);
  };

  return (
    <RegisterContainer>
      <FormRegister onSubmit={RegisterOnSubmit}>
        <InputRegister type="text" placeholder="이름" />
        <InputRegister
          type="email"
          placeholder="아이디"
          value={registerId}
          onChange={IdChangeHandler}
        />
        <InputRegister type="password" placeholder="비밀번호" />
        <InputRegister type="password" placeholder="비밀번호 확인" />
        <ButtonRegister>회원가입</ButtonRegister>
      </FormRegister>
    </RegisterContainer>
  );
}

export default RegisterPage;
