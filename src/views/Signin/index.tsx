import React from 'react';

import SigninLeft from 'components/SigninLeft';
import SigninRigth from 'components/SigninRigth';

import { Container } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <SigninLeft />
      <SigninRigth />
    </Container>
  );
};

export default Signin;
