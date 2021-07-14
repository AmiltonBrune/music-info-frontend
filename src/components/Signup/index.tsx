import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Input from '../Input';
import Button from '../Button';

import email from '../../assets/email.svg';
import password from '../../assets/password.svg';

import {
  Container,
  Content,
  InputContainer,
  Label,
  MessageContainer,
} from './styles';

type SigninRigthComponetProps = RouteComponentProps;

const SigninRigth: React.FC<SigninRigthComponetProps> = ({ history }) => {
  const goLogin = () => history.push('/');

  return (
    <Container>
      <Content>
        <Label>Email</Label>
        <InputContainer>
          <img src={email} alt='email' />
          <Input placeholder='Insira seu email...' type='email' />
        </InputContainer>
        <Label>Senha</Label>
        <InputContainer>
          <img src={password} alt='Senha' />
          <Input placeholder='Insira sua senha...' type='password' />
        </InputContainer>
        <Label>Confirmar Senha</Label>
        <InputContainer>
          <img src={password} alt='Senha' />
          <Input placeholder='Insira sua senha novamente...' type='password' />
        </InputContainer>
        <Button>registar</Button>
        <MessageContainer>
          <span onClick={goLogin}>
            Já possui uma conta? <b>entrar</b>
          </span>
        </MessageContainer>
      </Content>
    </Container>
  );
};

export default withRouter(SigninRigth);
