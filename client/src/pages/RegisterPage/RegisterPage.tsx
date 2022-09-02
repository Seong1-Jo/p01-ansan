import React, { useState, useRef } from 'react';
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
  const [registerName, setRegisterName] = useState<string>('');
  const [registerId, setRegisterId] = useState<string>('');
  const [registerPw, setRegisterPw] = useState<string>('');
  const [registerPwCheck, setRegisterPwCheck] = useState<string>('');

  const FocusName = useRef<HTMLInputElement>(null);
  const FocusId = useRef<HTMLInputElement>(null);
  const FocusPw = useRef<HTMLInputElement>(null);
  const FocusPwCheck = useRef<HTMLInputElement>(null);

  const NameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterName(e.target.value);
  };

  const IdChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterId(e.target.value);
  };

  const PwChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterPw(e.target.value);
    console.log('비밀번호 렌더링중');
  };
  const PwCheckChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterPwCheck(e.target.value);
    console.log('비밀번호확인 렌더링중');
  };
  const RegisterOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('focusname', FocusName);
    console.log('focusid', FocusId);
    switch (true) {
      case registerName === '':
        alert('이름입력하세요');
        if (FocusName.current !== null) {
          FocusName.current.focus();
        }
        break;
      case registerId === '':
        alert('아이디를 입력하세요');
        if (FocusId.current !== null) {
          FocusId.current.focus();
        }
        break;
      case registerPw === '':
        alert('비밀번호 입력하세요');
        if (FocusPw.current !== null) {
          FocusPw.current.focus();
        }
        break;
      case registerPwCheck === '':
        alert('비밀번호확인 입력하세요');
        if (FocusPwCheck.current !== null) {
          FocusPwCheck.current.focus();
        }
        break;
      default:
        if (registerPw === registerPwCheck) {
          console.log('비밀번호 일치');
        } else {
          console.log('비밀번호 불일치');
        }
    }
  };

  return (
    <RegisterContainer>
      <FormRegister onSubmit={RegisterOnSubmit}>
        <InputRegister
          ref={FocusName}
          type="text"
          placeholder="이름"
          value={registerName}
          onChange={NameChangeHandler}
        />
        <InputRegister
          ref={FocusId}
          type="email"
          placeholder="아이디"
          value={registerId}
          onChange={IdChangeHandler}
        />
        <InputRegister
          ref={FocusPw}
          type="text"
          placeholder="비밀번호"
          value={registerPw}
          onChange={PwChangeHandler}
        />
        <InputRegister
          ref={FocusPwCheck}
          type="text"
          placeholder="비밀번호 확인"
          value={registerPwCheck}
          onChange={PwCheckChangeHandler}
        />
        <ButtonRegister>회원가입</ButtonRegister>
      </FormRegister>
    </RegisterContainer>
  );
}

export default RegisterPage;