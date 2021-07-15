import React from 'react';

import CardTopSong from 'components/CardTopSong';
import topMusics from 'mocks/topMusics';

import { Container } from './styles';

const ListTopMusic: React.FC = () => {
  return (
    <Container>
      {topMusics.map((item) => (
        <CardTopSong music={item} />
      ))}
    </Container>
  );
};

export default ListTopMusic;
