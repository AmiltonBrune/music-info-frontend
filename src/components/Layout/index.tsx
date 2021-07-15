import React from 'react';

import Aside from 'components/Aside';
import Content from 'components/Content';
import Header from 'components/Header';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
