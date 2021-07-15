import React from 'react';

import ListTopMusic from 'components/ListTopMusic';
import RecentlyAdded from 'components/RecentlyAdded';
import CardLastMusic from 'components/CardLastMusic';

import lastSong from 'mocks/lastSong';

import { Container, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <CardLastMusic music={lastSong} />
      <Title>Top Músicas da Semana</Title>
      <ListTopMusic />
      <Title>Adicionados Recentemente</Title>
      <RecentlyAdded />
    </Container>
  );
};

export default Dashboard;
