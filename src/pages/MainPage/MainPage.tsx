import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import { Container } from 'styles/Common';

function MainPage() {
  return (
    <Container>
      <Header />
      <div>메인페이지</div>
      <Footer />
    </Container>
  );
}
export default MainPage;
