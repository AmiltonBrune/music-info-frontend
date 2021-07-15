import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Input from '../Input';
import Button from '../Button';

import email from '../../assets/email.svg';
import password from '../../assets/password.svg';
import userName from '../../assets/userName.svg';

import { register } from 'services/Register';

import {
  Container,
  Content,
  InputContainer,
  Label,
  MessageContainer,
} from './styles';

type SigninRigthComponetProps = RouteComponentProps;

const SigninRigth: React.FC<SigninRigthComponetProps> = ({ history }) => {
  const [valueEmail, setValueEmail] = useState<string>('');
  const [valuePassword, setValuePassword] = useState<string>('');
  const [valueName, setValueName] = useState<string>('');

  const goLogin = () => history.push('/');

  const handleRegister = async () => {
    try {
      await register({
        email: valueEmail,
        password: valuePassword,
        name: valueName,
      });

      goLogin();
    } catch (error) {
      alert('Erro ao cadastrar. Tente novamente em instantes');
    }
  };

  return (
    <Container>
      <Content>
        <Label>Nome</Label>
        <InputContainer>
          <img src={userName} alt='name' />
          <Input
            placeholder='Insira seu nome...'
            type='text'
            onChange={(e) => setValueName(e.target.value)}
          />
        </InputContainer>
        <Label>Email</Label>
        <InputContainer>
          <img src={email} alt='email' />
          <Input
            placeholder='Insira seu email...'
            type='email'
            onChange={(e) => setValueEmail(e.target.value)}
          />
        </InputContainer>
        <Label>Senha</Label>
        <InputContainer>
          <img src={password} alt='Senha' />
          <Input
            placeholder='Insira sua senha...'
            type='password'
            onChange={(e) => setValuePassword(e.target.value)}
          />
        </InputContainer>
        <Button
          onClick={handleRegister}
          disabled={
            valueName.length === 0 ||
            valueEmail.length === 0 ||
            valuePassword.length === 0
              ? true
              : false
          }
        >
          registar
        </Button>
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
