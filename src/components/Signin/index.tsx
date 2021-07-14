import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Input from '../Input';
import Button from '../Button';

import emailIcon from '../../assets/email.svg';
import passwordIcon from '../../assets/password.svg';

import { useAuth } from 'hooks/auth';

import {
  Container,
  Content,
  InputContainer,
  Label,
  MessageContainer,
} from './styles';

type SigninRigthComponetProps = RouteComponentProps;

const SigninRigth: React.FC<SigninRigthComponetProps> = ({ history }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  const goRegister = () => history.push('/signup');

  return (
    <Container>
      <Content>
        <Label>Email</Label>
        <InputContainer>
          <img src={emailIcon} alt='email' />
          <Input
            placeholder='Insira seu email...'
            type='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <Label>Senha</Label>
        <InputContainer>
          <img src={passwordIcon} alt='Senha' />
          <Input
            placeholder='Insira sua senha...'
            type='password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <Button onClick={() => signIn(email, password)}>entrar</Button>
        <MessageContainer>
          <span onClick={goRegister}>
            Não possui uma conta? <b>inscrever-se</b>
          </span>
        </MessageContainer>
      </Content>
    </Container>
  );
};

export default withRouter(SigninRigth);
