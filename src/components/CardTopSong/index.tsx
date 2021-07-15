import React from 'react';

import { Container, Img, Title, SubTitle } from './styles';

interface ICardTopSongProps {
  music: {
    name: string;
    artist: string;
    photo: string;
    like: boolean;
  };
}

const CardTopSong: React.FC<ICardTopSongProps> = ({ music }) => {
  return (
    <Container>
      <Img src={music.photo} alt='Capa' />
      <Title>{music.name}</Title>
      <SubTitle>{music.artist}</SubTitle>
    </Container>
  );
};

export default CardTopSong;
