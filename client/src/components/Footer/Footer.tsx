import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #5c5c5c;
  border-top: 1px solid #c8c8c8;
  color: #fff;
  font-size: 16px;
`;
const FootInner = styled.div`
  padding: 10px 0 20px 0;
  width: 1000px;
  margin: 0 auto;
`;
const FootInfo = styled.div`
  margin-top: 20px;
`;
const InfoSpan = styled.span`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
const FootSecondMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #c8c8c8; //나중에 겹치는 코드 줄이기!
`;

const FootCopyright = styled.div``;
const FootPrivacy = styled.div``;

function Footer() {
  const copyrightYear: number = new Date().getFullYear();

  return (
    <Container>
      <FootInner>
        <FootInfo>
          <InfoSpan>(주)트립안산 대표: Jo</InfoSpan>
          <InfoSpan>TEL: 031) XXX-XXXX</InfoSpan>
        </FootInfo>
        <FootSecondMenu>
          <FootCopyright>
            &copy;
            {copyrightYear}
            <span> Trip Ansan Company. All Right Reserved.</span>
          </FootCopyright>
          <FootPrivacy>개인정보처리방침</FootPrivacy>
        </FootSecondMenu>
      </FootInner>
    </Container>
  );
}

export default Footer;
