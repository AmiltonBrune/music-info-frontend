import React from 'react';

import LoginImage from '../../assets/loginBackgroud.svg';
import LogoLigth from '../../assets/logoLigth.svg';

import {
  Container,
  Header,
  Logo,
  Content,
  ContentImage,
  Footer,
} from './styles';

const SigninLeft: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={LogoLigth} alt='Logo' />
      </Header>
      <Content>
        <ContentImage src={LoginImage} alt='Login' />
      </Content>
      <Footer>
        <span>Suas letras favoritas em um só lugar.</span>
      </Footer>
    </Container>
  );
};

export default SigninLeft;
