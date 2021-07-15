import React from 'react';

import { Container, Badge } from './styles';

const Bagde: React.FC = ({ children }) => {
  return (
    <Container>
      <Badge>{children}</Badge>
    </Container>
  );
};

export default Bagde;
