import React from 'react';

import SignLeft from 'components/SignLeft';
import SignupComponent from 'components/Signup';

import { Container } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <SignLeft />
      <SignupComponent />
    </Container>
  );
};

export default Signin;
