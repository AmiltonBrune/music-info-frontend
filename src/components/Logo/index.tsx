import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Img } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <Img src={logo} />
    </Container>
  );
};

export default Logo;
