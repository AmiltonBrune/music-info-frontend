import React from 'react';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';

import { Container, Content, Information, Photo } from './styles';

interface ICardFavoriteSongsProps {
  music: {
    name: string;
    artist: string;
    photo: string;
    like: boolean;
  };
}

const CardFavoriteSongs: React.FC<ICardFavoriteSongsProps> = ({ music }) => {
  return (
    <Container>
      <Content>
        <Photo src={music.photo} alt='Capa' />
        <Information>
          <p>{music.name}</p>
          <span>{music.artist}</span>
        </Information>
      </Content>
      {music.like ? <TiHeartFullOutline /> : <TiHeartOutline />}
    </Container>
  );
};

export default CardFavoriteSongs;
