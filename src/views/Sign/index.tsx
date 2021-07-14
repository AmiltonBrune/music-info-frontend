import React from 'react';

import SigninLeft from 'components/SignLeft';
import SigninComponent from 'components/Signin';

import { Container } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <SigninLeft />
      <SigninComponent />
    </Container>
  );
};

export default Signin;
