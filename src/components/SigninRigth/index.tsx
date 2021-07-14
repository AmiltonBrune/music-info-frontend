import React from 'react';

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

const SigninRigth: React.FC = () => {
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
          <Input type='password' />
        </InputContainer>
        <Button>entrar</Button>
        <MessageContainer>
          <span>
            Não possui uma conta? <b>inscrever-se</b>
          </span>
        </MessageContainer>
      </Content>
    </Container>
  );
};

export default SigninRigth;
