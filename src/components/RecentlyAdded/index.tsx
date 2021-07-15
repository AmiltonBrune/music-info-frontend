import React from 'react';

import ImageRecentluAdded from 'components/ImageRecentluAdded';
import recentlyAddeds from 'mocks/recentlyAddeds';

import { Container } from './styles';

const RecentlyAdded: React.FC = () => {
  return (
    <Container>
      {recentlyAddeds.map((item) => (
        <ImageRecentluAdded music={item} />
      ))}
    </Container>
  );
};

export default RecentlyAdded;
