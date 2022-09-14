import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

//component
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Container } from 'styles/Common';

const RegisterContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;
const FormRegister = styled.form`
  /* border: 2px solid blue; */
  width: 600px;
  height: 400px;
  margin: auto; //가운데 정렬
  text-align: center; //자식 가운데 정렬!
`;
const InputRegister = styled.input`
  width: 70%;
  height: 40px;
  margin-bottom: 30px;
`;
const ButtonRegister = styled.button.attrs({
  type: 'submit',
})`
  width: 70%;
  height: 30px;
`;

function RegisterPage() {
  const navigate = useNavigate();

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
          //비밀번호 일치시
          let body = {
            name: registerName,
            email: registerId,
            password: registerPw,
          };
          console.log('비밀번호 일치');
          axios.post('/api/users/register', body).then((res) => {
            if (res.data.success) {
              navigate('/login');
            } else {
              console.log('회원가입실패');
              console.log(res);
            }
          });
        } else {
          console.log('비밀번호 불일치');
        }
    }
  };

  return (
    <Container>
      {/* <Header /> */}
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
            type="password"
            placeholder="비밀번호"
            value={registerPw}
            onChange={PwChangeHandler}
          />
          <InputRegister
            ref={FocusPwCheck}
            type="password"
            placeholder="비밀번호 확인"
            value={registerPwCheck}
            onChange={PwCheckChangeHandler}
          />
          <ButtonRegister>회원가입</ButtonRegister>
        </FormRegister>
      </RegisterContainer>
      {/* <Footer /> */}
    </Container>
  );
}

export default RegisterPage;
